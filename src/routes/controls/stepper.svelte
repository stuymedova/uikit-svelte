<script>
	import '$styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
	import { Symbol } from '$lib'

	// let stepperValue = 0
	// const colors = ['orange', 'orangered', 'gray', 'mediumpurple', 'plum']
</script>


<div class='component-wrapper'>
  <Stepper label='Optional Label'>
		<StepperValue />
		<DecrementButton a11yLabel='Decrement by 1'>
			<Symbol name='minus' />
		</DecrementButton>
		<IncrementButton a11yLabel='Increment by 1'>
			<Symbol name='plus' />
		</IncrementButton>
	</Stepper>


	<!-- <Stepper bind:value={stepperValue} isWrapped={true} range={[0, colors.length - 1]}>
		<DecrementButton a11yLabel='Decrement by 1'>
			<Symbol name='minus' />
		</DecrementButton>
		<IncrementButton a11yLabel='Increment by 1'>
			<Symbol name='plus' />
		</IncrementButton>
	</Stepper>

	<div 
		style='width: 44px; height: 44px; border-radius: 100%; background-color: {colors[stepperValue]};'
	></div> -->
</div>


<style>
  .component-wrapper {
		width: 100%;
		padding: 12px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* flex-direction: row;
		justify-content: center; */
    gap: 12px;
  }

	/* :global(.stepper) {
		width: 70px;
	} */
</style>