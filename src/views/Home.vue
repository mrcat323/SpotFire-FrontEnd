<template>
  <div>
	  <Navbar :bg-image="img" title="Welcome to CosmoSpirit" sub-title="SpaceApps team that prevents wildfires" />
  <div class="container pt-25 mb-75">
		<section class="section">
			<div class="content">
				<div class="columns is-centered">
					<div class="column is-half">
						<b-field message="What do you want to search?">
							<b-input placeholder="Search..."
								v-model="city"
								type="search"
								icon="magnify"
								minlength="3">
							</b-input>
							<p class="control">
								<button @click="grab" class="button is-primary"><i class="mdi mdi-magnify"></i></button>
							</p>
						</b-field>	
					</div>
					<div class="column is-half">
						<div class="card" v-if="information">
							<div class="card-content">
								<div class="media">
									<div class="media-content">
										<p class="title is-4">{{ information.city }}</p>
									</div>
								</div>

								<div class="content">
									<p class="subtitle">
									<b-icon icon="weather-sunny" size="is-medium">
									</b-icon>		
									{{ information.temp }} &#8451;</p>
									<p class="subtitle">
									<b-icon
									icon="water"
									size="is-medium"
									>
									</b-icon>	
									{{ information.humidity }}%</p>
									<p class="subtitle">
									<b-icon
									icon="fire"
									size="is-medium"
									></b-icon>	
									{{ information.fire }}%</p>
									<p class="subtitle">
									<b-icon
									icon="wind-turbine"
									size="is-medium"
									></b-icon>	
									{{ information.wind }}M/S</p>
									<br>
								</div>
							</div>
				</div>
					<progress-bar
					:options="options"
					value="100"
					></progress-bar>
					</div>
					</div>
					</div>
		</section>	  
  </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import axios from 'axios'

axios.defaults.baseURL = 'http://fire.rogo.tj'

export default {
	data: () => ({
		city: '',
		error: '',
		information: null,		
		img: 'https://media-public.canva.com/MADQ5PdZ0-A/1/screen_2x.jpg',
		options: {
			text: {
				color: '#FFFFFF',
				shadowEnable: true,
				shadowColor: '#000000',
				fontSize: 14,
				fontFamily: 'Helvetica',
				dynamicPosition: false,
				hideText: false
			},
			progress: {
				color: '#2dbd2d',
				backgroundColor: '#333333'
			},
			layout: {
				height: 60,
				width: 200,
				verticalTextAlign: 61,
				horizontalTextAlign: 43,
				zeroOffset: 0,
				strokeWidth: 30,
				progressPadding: 0,
				type: 'circle'
			}
		},
		loading: false,
		value: 20
	}),
	methods: {
		grab() {
			this.information = null	
			if (this.city.length) {
				this.loading = true
				if (this.loading)
					this.countdown()
				axios.get(`/city/${this.city}`)
				.then(res => {
					this.loading = false
					this.value = 20
					this.information = res.data.city_info
				}).catch(err => {
					console.log(err.response.data.status)	
					if (err.response.status) {
						this.loading = false
						this.value = 20	
						this.error = 'Sorry, but we cannot find city in our database, try anything else'
						Snackbar.open({ message: this.error, position: 'is-bottom-left'})
					}
				})	
			}
		},
		countdown() {
			if (this.value != 100)
				this.value += 20	
			setTimeout(() => {
				this.countdown()
			}, 150)
		}
	},
	components: { Navbar }
}
</script>
<style lang="scss" scoped>
.mb-75 {
	margin-bottom: 75px;	
}
</style>