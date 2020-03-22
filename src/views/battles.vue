<template>
	<section class="section">
		<div class="section__card" 
			v-for="(val, key) in battles"
			:key="key"
			:style="cardBorder(val)" 
			@click="val.isPlayed ? watcMatch(val): false"
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
					<battles-logo />
				</div>
				<div class="section__battles-group">
					<div>
						<div class="section__group-coefficient">
							<div 
								class="section__group-player" 
								:style="dinamicCommandStyle(val, val.participants[0])"
								>
								{{ val.participants[0].name }}
							</div>
						</div>
						<div class="section__group-coefficient">
							<div 
								class="section__group-player"
								:style="dinamicCommandStyle(val, val.participants[1])"
								>
								{{ val.participants[1].name }}
							</div>
						</div>
					</div>
					<div class="match-name">
						MATCH: #1
					</div>
				</div>
				<div class="section__card-matches-footer">
					<winner-logo v-if="val.isFinished"></winner-logo>
					<div class="section__card-reselt-time">{{ val.stat }}</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import buttonPlay from '../assets/button-play.vue'
import cardWaitingLogo from '../assets/card-wait-logo.vue'
import cardPlayedLogo from '../assets/card-play-logo.vue'
import cardFinishedLogo from '../assets/card-finished-logo.vue'
import battlesLogo from '../assets/battles-logo.vue'
import winnerLogo from '../assets/winner-logo.vue'

import battlesObject from '../battles.js'

export default {
	data: () => ({
		battles: battlesObject,
	}),
	components: {
		buttonPlay,
		cardWaitingLogo,
		cardPlayedLogo,
		cardFinishedLogo,
		battlesLogo,
		winnerLogo
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
		watcMatch(val) {
			let matchPath = `${this.$router.currentRoute.path}
				/${val.participants[0].name.split(' ').join('_')}
				-${val.participants[1].name.split(' ').join('_')}`
			this.$router.push({path: matchPath})
		}
	}
}
</script>

<style>
	.section__battles-group {
		display: inline-flex; 
		justify-content: space-between; 
		align-items: center;
	}
	.match-name {
		background: #F0F0F0;
		border-radius: 4px;
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #757C84;
		padding: 5px 8px;
	}
	.grey {
		color: var(--dark-grey);
	}
</style>