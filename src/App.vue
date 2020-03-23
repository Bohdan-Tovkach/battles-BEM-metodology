<template>
  <div id="app">
		<header-view />
    <router-view/>
  </div>
</template>

<script>
import headerView from './components/header.vue'

export default {
	components: {
		headerView
	},
}
</script>

<style>
	:root {
		--header-height: 375px;
		--white: #FFFFFF;
		--red: #FF5E5E;
		--dark-grey: #8F9A9D;
		--light-grey: #FAFAFA;
		--content-margin: 137px;
		--card-margin: 33px;
		--section-margin: calc(var(--content-margin) - var(--card-margin))
	}
	html, body {
		margin: 0;
		padding: 0;
		background: var(--light-grey);
	}
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		src:
			local('Green Web'),
			local('GreenWeb-Regular'), 
			url("../public/Roboto-Bold.ttf") format("truetype");
	}
	
	/* HEADER */
	.header {
		min-height: var(--header-height);
		width: 100%;
		background: radial-gradient(
			38.02% 74.54% at 60.78% 0%, 
			rgba(24, 24, 28, 0.46) 0%, 
			#18181C 100%);
		background: url('./assets/background-header.png');
	}
	.header__content {
		width: 50%;
		height: var(--header-height);
	}
	.header__content-wrapper {
		width: auto;
		height: var(--header-height);
		display: inline-flex;
		position: relative;
		margin: 0 0 0 var(--content-margin);
		align-items: center;
		justify-content: center;
	}
	.header__h1 {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 100px;
		color: var(--white)
	}
	@media (max-width: 1495px) {
		.header__content {
			width: 100%;
		}
	}
	@media (max-width: 991.98px) {
		.header__content-wrapper {
			margin: 0 0 0 20px;
		}
		.app__header {
			background: url('./assets/background-header-mobile.png') no-repeat fixed; 
			background-size: cover;
		}
	}
	@media (max-width: 767.98px) {
		.header__h1 {
			font-size: 80px;
		}
		.header__content-wrapper {
			width: 100%;
			justify-content: flex-start;
		}
	}
	@media (max-width: 575.98px) {
		.header__h1 {
			font-weight: normal;
			font-size: 50px;
		}
	}
	.header__nav {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.header__nav-button {
		display: inline-block;
		padding: 20px 50px;
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: #757C84;
		text-decoration: none;
	}
	.nav-button--active {
		background: #EA5656;
		color: #FFFFFF;
	}

	/* SECTION */
	.section {
		margin: 0 var(--section-margin);
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		min-height: 100px;
	}
	/* card */
	.section__card {
		position: relative;
		margin: var(--card-margin);
		padding: 25px;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		min-width: 370px;
		background: #FFFFFF;
		border: 1px solid rgba(143, 154, 157, 0.2);
		box-sizing: border-box;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
	}
	@media (max-width: 1725px) {
		.section {
			justify-content: center;
			margin: 0;
		}
	}
	@media (max-width: 930.98px) {
		.app_section {
			width: 100%;
		}
		.section__card {
			width: 85%;
		}
	}
	.section__card-logo {
		position: absolute;
		right: 0;
		top: 0;
	}
	/* card header */
	.section__card-header {
		display: flex;
		justify-content: space-between;
	}
	.tourn-name {
		display: inline-flex;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.01em;
		color: #757C84;
	}
	.section__tourn-time {
		text-align: right;
		z-index: 100;
	}
	.tourn__start-time {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 35px;
		text-align: center;
		color: #282830;
	}
	.section__tourn-date {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.01em;
		color: #757C84;
	}
	/* card-content */
	.section__card-content {
		display: flex;
		flex-direction: column;
	}
	/* players */
	.section__card-content-players {
		margin-top: 90px;
		width: 100%;
		display: block;
	}
	.player-logo {
		display: inline-block;
		width: 60px;
		padding: 5px;
	}
	/* group wrapper */
	.group-wrapper {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.section__group-coefficient {
		display: flex;
		justify-content: space-between;
	}
	.command-coefficient {
		background: #FAFAFA;
		border: 1px solid rgba(151, 151, 151, 0.1);
		box-sizing: border-box;
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		display: flex;
		margin: 5px 0;
		padding: 0 5px;
		align-items: center;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}
	.section__group-player {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 35px;
		color: #282830;
	}
	.command-score {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 35px;
	}
	/* card footer-section */
	.section__card-battle-footer {
		display: flex;
		justify-content: space-between;
	}
	.section__card-matches-footer {
		display: inline-flex; 
		justify-content: flex-start
	}
	.section__card-reselt-time {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.01em;
		color: #757C84;
	}
	.partner-logo {
		width: 62px; 
		height: 15px;
	}
	.view-match {
		padding: 25px;
		display: flex;
		justify-content: center;
		width: 70%;
		min-height: 560px;
		background: #FFFFFF;
		border: 1px solid rgba(143, 154, 157, 0.2);
		box-sizing: border-box;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
		font-family: Roboto;
		text-align: center;
	}
	.match-section {
		width: 100%;
		height: 50em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
