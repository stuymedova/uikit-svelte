<!-- DEMO 1: Stepper values are not wrapped -->
<!-- <script>
	import '$styles/main.css'
  import { Stepper, IncrementButton, DecrementButton, StepperValue } from '$lib'
	import { Symbol } from '$lib'
	import { Minus, Plus } from '$symbols'
</script>


<div class='component-wrapper'>
  <Stepper label='Optional Label'>
		<StepperValue />
		<DecrementButton a11yLabel='Decrement by 1'>
			<Symbol symbol={Minus} />
		</DecrementButton>
		<IncrementButton a11yLabel='Increment by 1'>
			<Symbol symbol={Plus} />
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
</style> -->


<!-- DEMO 2: Stepper values are wrapped -->
<script>
	import '$styles/main.css'
  import { Stepper, IncrementButton, DecrementButton } from '$lib'
	import { Symbol } from '$lib'
	import { Minus, Plus } from '$symbols'

	let stepperValue = 0
	const colors = ['orange', 'mediumpurple', 'gray', 'orangered', 'plum']
</script>


<div class='component-wrapper'>
	<div
		style='width: 44px; height: 44px; border-radius: 100%; background-color: {colors[stepperValue]};'
	></div>

	<Stepper bind:value={stepperValue} isWrapped={true} range={[0, colors.length - 1]}>
		<DecrementButton a11yLabel='Decrement by 1'>
			<Symbol symbol={Minus} />
		</DecrementButton>
		<IncrementButton a11yLabel='Increment by 1'>
			<Symbol symbol={Plus} />
		</IncrementButton>
	</Stepper>
</div>


<style>
  .component-wrapper {
		width: 100%;
		padding: 12px 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
    gap: 12px;
  }

	:global(.stepper) {
		width: 70px;
	}
</style>