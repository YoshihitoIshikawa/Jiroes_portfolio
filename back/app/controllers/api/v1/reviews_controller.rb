class Api::V1::ReviewsController < ApplicationController
  def index
    @shop = Shop.new(shop_params)
    @reviews = Review.all
    render json: @reviews
  end

  def create
    @review = Review.new(review_params)
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
    params.permit()
  end
end