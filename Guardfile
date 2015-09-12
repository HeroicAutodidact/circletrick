
## Note: if you are using the `directories` clause above and you are not
## watching the project directory ('.'), then you will want to move
## the Guardfile to a watched dir and symlink it back, e.g.
#
#  $ mkdir config
#  $ mv Guardfile config/
#  $ ln -s config/Guardfile .
#
# and, you'll have to watch "config/Guardfile" instead of "Guardfile"


guard :jasmine, :server => :jasmine_gem, :port=>8888, :jasmine_url => 'http://localhost:8888/', :server_timeout => 120 do
  watch(%r{spec/.+$})
  watch(%r{js/.+$}) { |m| puts "spec/js/#{m[1]}_spec" }
  #watch(%r{app/assets/javascripts/(.+?)\.(js\.coffee|js|coffee)(?:\.\w+)*$}) { |m| "spec/javascripts/#{ m[1] }_spec.#{ m[2] }" }
end

guard 'livereload', :notify=>true do
  watch(%r{js/.*\.js})
  watch(%r{index.html})
end
