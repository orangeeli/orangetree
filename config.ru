use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

#run Rack::File.new(File.expand_path('public'))
run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'texts/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
