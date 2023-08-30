class Api::V1::ShopsController < ApplicationController
  def index
    @shops = Shop.all
    render json: @shops
  end

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render json: @shop, status: :created
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  def show
    @shop = Shop.find(params[:id])
    render json: @shop
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop.update(shop_params)
      render json: @shop
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @shop = Shop.find(params[:id])
    @shop.destroy
  end

  private
  def shop_params
    params.permit(:name, :address, :phone_number, :access, :parking, :open_time, :menu, :closed_days, :remarks, :prohibited_matters, :when_to_buy_tickets, :call_timing)
  end
end
