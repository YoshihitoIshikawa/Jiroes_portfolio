import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import axios from 'axios';

import EditReview from './edit';
import { data } from 'autoprefixer';

jest.mock('next/router');
jest.mock("@auth0/auth0-react");
jest.spyOn(window, 'alert').mockImplementation((message) => {
  console.error('Alert:', message);
});

describe('EditReview', () => {
  let component;

  const reviewData = {
    id: 1,
    title: "Review 1",
    caption: "Test caption",
    score: 5,
    image: {
      url: "https://example.com/review1.jpg"
    },
    sub: "1234"
  };

  beforeEach(async () => {
    useRouter.mockReturnValue({
      query: {
        shopId: 1,
        reviewId: 1
      }
    });

    useAuth0.mockReturnValue({
      isAuthenticated: true,
      getAccessTokenSilently: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      user: { sub: '1234' }
    });

    component = render(<EditReview review={reviewData}/>);
  });

  afterEach(() => {
    component.unmount();
  });

  test('should render the edit review form', async () => {
    console.log(data)
    expect(screen.getByText('レビュー投稿')).toBeInTheDocument();
    expect(screen.getByLabelText('商品名')).toBeInTheDocument();
    expect(screen.getByLabelText('内容')).toBeInTheDocument();
    expect(screen.getByLabelText('評価')).toBeInTheDocument();
    expect(screen.getByTestId('fileInput')).toBeInTheDocument();
    expect(screen.getByText('送信')).toBeInTheDocument();
  });

  it('should show validation errors when submitting an empty form', async () => {

    const submitButton = screen.getByText('送信');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('入力必須項目です。')).toBeInTheDocument();
      expect(screen.queryByText('画像を選択して下さい。')).not.toBeInTheDocument();
    });
  });

  it('should submit the form for an authenticated user', async () => {
    const titleInput = screen.getByLabelText('商品名');
    const captionInput = screen.getByLabelText('内容');
    const scoreInput = screen.getByLabelText('評価');
    const imageInput = screen.getByTestId('fileInput');

    userEvent.type(titleInput, 'New Title');
    userEvent.type(captionInput, 'New Caption');
    userEvent.selectOptions(scoreInput, '5');
    const imageFile = new File(['image contents'], 'test.jpg', { type: 'image/jpg' });
    userEvent.upload(imageInput, imageFile);

    const submitButton = screen.getByText('送信');
    userEvent.click(submitButton);

    // Assert that the form data is submitted
    await waitFor(() => {
      expect(axios.patch).toHaveBeenCalledWith(
        'http://localhost:3000/api/v1/shops/1/reviews/1',
        expect.any(FormData),
        {
          headers: {
            Authorization: 'Bearer dummyToken',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    });
  });
});
