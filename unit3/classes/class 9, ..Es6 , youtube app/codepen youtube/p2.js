//
//https://youtube.googleapis.com/youtube/v3/search?q=tesla&key=[YOUR_API_KEY]

let API = "AIzaSyDjQMNtpb52drt3zDkimwyIjbRbZUJ-2Bc";

let search_results_div = document.getElementById("search_results");

async function searchVideos() {

  try {
    let inp = document.getElementById("search").value;

    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=30&part=snippet`
    );

    // let res = await fetch(
    //   `https://www.udemy.com/api-2.0/courses/?search=javascript`
    // );

    let data = await res.json();
    console.log("data:", data);

    let array_of_videos = data.items;

    appendVideos(array_of_videos);
  } catch (err) {
    console.log("err:", err);
  }
}


// <iframe width="560" height="315" src="https://www.youtube.com/embed/hKB-YGF14SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


const appendVideos = (arr) => {
  arr.forEach(({ id: { videoId } }) => {
    console.log("videoId:", videoId);
    let div = document.createElement("div");

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "460px";
    iframe.height = "260px";
    //iframe.allowfullscreen = "true";

    iframe.setAttribute("allowfullscreen", true);

    div.append(iframe);

    search_results_div.append(div);
  });
};



