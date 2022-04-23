import React from "react";

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const allImages = importAll(
	require.context("../components/Uploads", false, /\.(png|jpe?g|svg)$/)
);
console.log(allImages, "gg")
export default function ImgTag({ productId, imgurl, alt, className }) {
	console.log(imgurl);
	const imgUrl = allImages[imgurl].default;
	return <img src={imgUrl} alt={alt} className={className} />;
}
export { allImages };
