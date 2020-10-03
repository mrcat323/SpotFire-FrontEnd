<template>
  <div>
	  <Navbar :bg-image="img" title="Welcome to CosmoSpirit" sub-title="SpaceApps team that prevents wildfires" />
  <div class="container pt-25">
		<section class="section">
			<div class="content">
				<div class="columns is-centered">
					<div class="column is-half">
						<b-field message="What do you want to search?">
							<b-input placeholder="Search..."
								type="search"
								icon="magnify">
							</b-input>
							<p class="control">
								<button class="button is-primary"><i class="mdi mdi-magnify"></i></button>
							</p>
						</b-field>	
					</div>
					<div class="column is-half">
						<div class="card">
							<div class="card-content">
								<div class="media">
									<div class="media-content">
										<p class="title is-4">Dushanbe</p>
									</div>
								</div>

								<div class="content">
									<p class="subtitle">
									<b-icon icon="weather-sunny" size="is-medium">
									</b-icon>		
									28 &#8451;</p>
									<p class="subtitle">
									<b-icon
									icon="water"
									size="is-medium"
									>
									</b-icon>	
									Dry</p>
									<p class="subtitle">
									<b-icon
									icon="wind-turbine"
									size="is-medium"
									></b-icon>	
									1M/S</p>
									<br>
									<time datetime="2020-10-4">13:13PM - 04 Oct 2020</time>
								</div>
							</div>
				</div>
					</div>
					</div>
					</div>
		</section>	  
  </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'

export default {
	data: () => ({
		img: 'https://media-public.canva.com/MADQ5PdZ0-A/1/screen_2x.jpg'
	}),
	components: { Navbar }
}
</script>
