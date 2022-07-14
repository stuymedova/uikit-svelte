<script>
	import '$styles/system-display/lightMode.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
	import { Symbol } from '$lib'
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