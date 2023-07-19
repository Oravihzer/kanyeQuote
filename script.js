const jokeContainer = document.getElementById("quote");
const btn = document.getElementById("start");
const url = "https://api.kanye.rest";

let getJoke = async function test() {
  let a = await fetch(url);
  return a.json();
};
function test2() {
  getJoke().then(
    (msg) =>
      (jokeContainer.innerHTML = `"${msg.quote} "` + `<br><br><br> -Kanye West`)
  );
}

test2();

btn.addEventListener("click", test2);
