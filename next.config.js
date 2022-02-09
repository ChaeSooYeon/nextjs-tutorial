const API_KEY = process.env.API_KEY;
 
module.exports = {
  reactStrictMode: true,
   async redirects(){ //유저가 url이 바뀌는 과정을 그대로 볼 수 있음
     return [
       {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        // source: "/old-blog/:path",
        // destination: "/new-blog/:path",
        permanent: false,
      },
      {
        source: "/api/movies/redirects",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        permanent: false,
      },
    ];
   },
   async rewrites() {
    return [
      {
        source: "/api/movies/rewrites",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};