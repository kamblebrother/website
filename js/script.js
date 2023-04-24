let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
	themeToggler.classList.toggle('active');
}

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {

	btn.onclick = () => {
		let color = btn.style.background;
		document.querySelector(':root').style.setProperty('--main-color', color);
	}

});

var swiper = new Swiper(".home-slider", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: true,
	},
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	}
});

var swiper = new Swiper(".review-slider", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	spaceBetween: 10,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 2,
		},
		1050: {
			slidesPerView: 3,
		},
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	}
});

// formspree js 
var form = document.getElementById("my-form");


async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		if (response.ok) {
			form.reset();
			status.innerHTML = "<p>Thanks for your submission!</p>";
			
		} else {
			response.json().then(data => {
				if (Object.hasOwn(data, 'errors')) {
					status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
				} else {
					status.innerHTML = "Oops! There was a problem submitting your form";
				}
			})
		}
	}).catch(error => {
		status.innerHTML = "Oops! There was a problem submitting your form"
	});
}

form.addEventListener("submit", handleSubmit)

/* paste this line in verbatim */
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
/* customize formbutton below*/
formbutton("create", {
	action: "https://formspree.io/f/mvonrgwb",
	title: "How can we help?",
	fields: [
		{
			type: "email",
			label: "Email:",
			name: "email",
			required: true,
			placeholder: "your@email.com"
		},
		{
			type: "textarea",
			label: "Message:",
			name: "message",
			placeholder: "your message",
		},
		{ type: "submit" },
		{
			type: "text",
			name: "name",
			placeholder: "name"
		},
		{
			type: "text",
			name: "number",
			placeholder: "number"
		},
		{
			type: "text",
			name: "subject",
			placeholder: "subject"
		},
	],
	// styles: {
	//   title: {
	//     backgroundColor: "gray"
	//   },
	//   button: {
	//     backgroundColor: "gray"
	//   }
	// }
});

