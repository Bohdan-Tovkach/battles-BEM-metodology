<template>
<div>
	<header class="header">
		<header-logo />
			<div class="header__content">
				<div class="header__content-wrapper">
					<div class="header__h1">{{ 'Make me up!' }}</div>
					<div class="header__nav">
						<router-link 
							to="/" 
							class="header__nav-button" 
							exact-active-class="header__nav-button nav-button--active"
							>
							{{ 'matches' }}
						</router-link>
						<router-link 
							to="/battles" 
							class="header__nav-button" 
							exact-active-class="header__nav-button nav-button--active"
							>
							{{ 'battles' }}
						</router-link>
					</div>
				</div>
			</div>
	</header>
</div>
</template>

<script>
import headerLogo from '../assets/header-logo.vue'

export default {
	components: {
		headerLogo,
	},
}
</script>