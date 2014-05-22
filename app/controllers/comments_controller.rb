class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!, :except => [:show]
  def show
  end
  # GET /comments/new
  def new
    @comment = Comment.new
  end
  # GET /comments/1/edit
  def edit
  end
  # POST /comments
  # POST /comments.json
  def create
    @post = Post.friendly.find(params[:post_id])
    @comment = @post.comments.new(comment_params)
    if  @comment.save
      @current_url = post_url(@post)
      UserMailer.contact(@post,@current_url).deliver
      @comments = @post.comments.order("created_at DESC").page(params[:page]).per(2)
    end
    respond_to do |format|
      format.html { redirect_to @comment.post }
      format.js {}
    end
  end
  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: t("comment_updated") }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @post = Post.friendly.find(params[:post_id])
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to post_path(@post), notice:  t("comment_destroy")  }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])

    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params[:comment].permit(:title_comment, :content_comment).merge(user_id: current_user.id)
    end

  end
