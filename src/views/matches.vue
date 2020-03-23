<template>
	<section class="section">
		<router-link to="/matches/match" tag="div" class="section__card"
			v-for="(val, key) in matches"
			:key="key"
			:style="cardBorder(val)"
			@click.native.prevent.capture="clicked(val)"
			>
			<card-played-logo v-if="val.isPlayed" class="section__card-logo" />
			<card-waiting-logo v-if="val.isWaiting" class="section__card-logo" />
			<card-finished-logo v-if="val.isFinished" class="section__card-logo" />
			<div class="section__card-header">
				<div class="tourn-name">
					{{ 'Asia Minor: Play-Off' }}
				</div>
				<div class="section__tourn-time">
					<div :class="dinamicTimeClass(val)">
						<button-play v-if="val.isPlayed">
							<template #play-btn-desc>
								WATCH LIVE
							</template>
						</button-play>
						{{ val.isPlayed ? '' : val.start.time }}
					</div>
					<div class="section__tourn-date">
						{{ val.isWaiting || val.isFinished ? val.start.date : '' }}
					</div>
				</div>
			</div>
			<div class="section__card-content">
				<div class="section__card-content-players">
					<img class="player-logo" :src="val.participants[0].logo" />
					<img class="player-logo" :src="val.participants[1].logo" />
				</div>
				<div class="group-wrapper">
					<div class="section__group-coefficient">
						<div 
							class="section__group-player" 
							:style="dinamicCommandStyle(val, val.participants[0])"
							>
							{{ val.participants[0].name }}
						</div>
						<div 
							:style="dinamicCommandStyle(val, val.participants[0])"
							:class="dinamicCommandClass(val.isFinished)"
							>
							{{ scoreValue(val.participants[0]) }}
						</div>
					</div>
					<div class="section__group-coefficient">
						<div 
							class="section__group-player" 
							:style="dinamicCommandStyle(val, val.participants[1])"
							>
							{{ val.participants[1].name }}
						</div>
						<div 
							:style="dinamicCommandStyle(val, val.participants[1])"
							:class="dinamicCommandClass(val.isFinished)"
							>
							{{ scoreValue(val.participants[1]) }}
						</div>
					</div>
				</div>
				<div class="section__card-battle-footer">
					<div class="section__card-reselt-time">{{ val.stat }}</div>
					<img :src="val.partnerLogo" class="partner-logo" />
				</div>
			</div>
		</router-link>
	</section>
</template>

<script>
import buttonPlay from '../assets/button-play.vue'
import cardWaitingLogo from '../assets/card-wait-logo.vue'
import cardPlayedLogo from '../assets/card-play-logo.vue'
import cardFinishedLogo from '../assets/card-finished-logo.vue'

import matchesObject from '../matches.js'

export default {
	data: () => ({
		matches: matchesObject,
	}),
	components: {
		buttonPlay,
		cardWaitingLogo,
		cardPlayedLogo,
		cardFinishedLogo
	},
	methods: {
		scoreValue(val) {
			return val.points === null 
				? val.coefficient 
				: val.points
		},
		dinamicCommandClass(val) {
			return  val ? `command-score` : 'command-coefficient'
		},
		dinamicCommandStyle(val, participant) {
			return val.isWaiting || val.isPlayed 
				? 'color: black' 
				: val.isFinished && participant.winner 
					? 'color: black;' 
					: 'color: #757C84;'
		},
		dinamicTimeClass(val) {
			return val.isFinished 
				? 'tourn__start-time grey' 
				: 'tourn__start-time'
		},
		cardBorder(val) {
			return val.isPlayed ? 'border: 1px solid #EA5656; cursor: pointer;' : ''
		},
		clicked(val) {
			if(val.isPlayed) this.$router.push('/matches/match')
		}
	},
}
</script>