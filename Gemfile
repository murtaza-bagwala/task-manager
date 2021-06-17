# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '< 6'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '< 6'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.10'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

gem 'rack-cors', '~> 1.1.1'

gem 'react-rails', '~> 2.6', '>= 2.6.1'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'faker'
end

group :development do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'foreman', require: false
  gem 'pry-rails', '~> 0.3.4'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # for test coverage report
  gem 'rspec-rails', '~> 5.0', '>= 5.0.1'
  gem 'simplecov', require: false
end


# A Ruby static code analyzer and formatter, based on the community Ruby style guide.
gem 'rubocop'
gem 'rubocop-performance'
gem 'rubocop-rails'
# Flexible authentication solution for Rails with Warden.
gem 'devise'
# Simple, efficient background processing for Ruby
gem 'sidekiq'
# Bootstrap 4 rubygem for Rails / Sprockets / Hanami / etc
gem 'bootstrap', '~> 4.4.1'

# for displaying notifications
gem 'jquery-growl-rails'
gem 'jquery-rails'

#  Font-Awesome Sass gem for use in Ruby/Rails projects  https://github.com/FortAwesome/font-awesome-sass
gem 'font-awesome-sass', '~> 5.15.1'

gem 'jwt', '~> 1.5', '>= 1.5.4'

gem 'bcrypt', '~> 3.1', '>= 3.1.16'
