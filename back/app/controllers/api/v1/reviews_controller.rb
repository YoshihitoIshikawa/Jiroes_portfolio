class Api::V1::ReviewsController < SecuredController
  skip_before_action :authorize_request, only: [:index,:show]

  def index
    @shop = Shop.find(params[:shop_id])
    @reviews = @shop.reviews
    render json: @reviews
  end

  def create
    @review = @current_user.reviews.new(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.permit(:title, :caption, :image, :score, :user_id, :shop_id)
  end
end
