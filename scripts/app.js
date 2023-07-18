gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: "#smooth-wrapper",
		content: "#smooth-content",
		smooth: 2,
		effects: true,
	});

	gsap.fromTo(
		".welcome",
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: ".welcome",
				start: "top",
				scrub: true,
			},
		}
	);

	gsap.fromTo(
		".akira-banner-label",
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: ".akira-banner-label",
				start: "top",
				scrub: true,
			},
		}
	);

	gsap.fromTo(
		".color",
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: ".color",
				start: "center",
				scrub: true,
			},
		}
	);

	gsap.fromTo(
		".d3",
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: ".d3",
				start: "80%",
				scrub: true,
			},
		}
	);

	gsap.fromTo(
		".info",
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: ".info",
				start: "60%",
				scrub: true,
			},
		}
	);

	// opacity 0 -> opacity 1
	gsap.fromTo(
		".d3",
		{ opacity: 0 },
		{
			opacity: 1,
			scrollTrigger: {
				trigger: ".d3",
				end: "top",
				scrub: true,
			},
		}
	);

	gsap.fromTo(
		".color",
		{ opacity: 0 },
		{
			opacity: 1,
			scrollTrigger: {
				trigger: ".color",
				end: "top",
				scrub: true,
			},
		}
	);
}
