#require 'rack/file'

class MyHaml
  require 'haml'
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, body = @app.call(env)

    puts "test: #{env['PATH_INFO']}"

    if env['PATH_INFO'] =~ /^\/$|\.haml$/
      puts "The body: #{body}"
      body = parse_haml(body)
      headers['Content-Length'] = body.length.to_s
      headers['Content-Type'] = 'text/html'
      puts "The body after parsing #{body}"
    end

    [status, headers, [body]]
  end

  private
  def parse_haml(body)
    puts "Parsing the HAML"
    full_body = traverse_body(body)
    puts "After traverse body #{full_body}"
    engine = Haml::Engine.new full_body
    engine.render
  end

  def traverse_body(body)
    text = ''
    body.each {|x| text << x}
    text
  end

end

use MyHaml
use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

#run Rack::File.new(File.expand_path('public'))
run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.haml', File::RDONLY)
  ]
}
