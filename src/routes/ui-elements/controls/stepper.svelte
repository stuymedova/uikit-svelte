<script>
	import '$lib/styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
</script>


<div class='component-wrapper'>
  <Stepper label='Optional Label'>
		<StepperValue />
		<DecrementButton>
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
				<g class="minus" transform="translate(-14 -16)">
					<rect class="symbol_background" width="12" height="12" transform="translate(14 16)" fill="none"/>
					<path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(14.625 22)"/>
				</g>
			</svg>
		</DecrementButton>
		<IncrementButton>
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g class="plus" transform="translate(0.625)">
          <path class="vertical_stroke" data-name="vertical stroke" d="M0,11.375a.6.6,0,0,1-.625-.566V-.059A.6.6,0,0,1,0-.625a.6.6,0,0,1,.625.566V10.809A.6.6,0,0,1,0,11.375Z" transform="translate(5.375 0.625)"/>
          <path class="horizontal_stroke" data-name="horizontal stroke" d="M10.809.625H-.059A.6.6,0,0,1-.625,0,.6.6,0,0,1-.059-.625H10.809A.6.6,0,0,1,11.375,0,.6.6,0,0,1,10.809.625Z" transform="translate(0 6)"/>
        </g>
      </svg>
		</IncrementButton>
	</Stepper>
</div>


<style>
  .component-wrapper {
		width: 100%;
		padding: 12px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
    gap: 12px;
  }
</style>