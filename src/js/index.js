/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/

console.log("javascript ready...");
console.log("Navbar Element:", navbar);
console.log("Icon Element:", icon);
console.log("Nav Element:", nav);

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
  var navbar = document.getElementById("navbar");
  var icon = document.querySelector(".icon"); // Define the icon variable
  var nav = navbar; // Define the nav variable

  navbar.className === "navibar"
    ? (navbar.className += " responsive")
    : (navbar.className = "navibar");
  icon.addEventListener("click", function () {
    nav.classList.toggle("responsive");
  });
};

showMobileNav();

//! Notification Bell
const notification = (pack) => {
  alert("notification checking..., please click OK to continue");
  return new Promise((success, failed) => {
    if (pack != "javascript")
      failed("your pack is not starterpack, please read the notes on js file");
    setTimeout(() => {
      success("Notification Success! 👏");
    }, 1200);
  });
};

//! asynchronous trigger for notification bell
async function showPopup(params) {
  try {
    const popup = await notification(params);
    alert(popup);
  } catch (err) {
    alert(err);
  }
}

//! year
document.getElementById("year").innerHTML = new Date().getFullYear();

//new navigator
