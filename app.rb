require "sinatra"

get "/" do 

erb :index
end

get "/contact" do

erb :contact
end

get "/gallery" do

erb :gallery
end

get "/week" do

erb :week
end

get "/todolist" do

erb :todolist
end