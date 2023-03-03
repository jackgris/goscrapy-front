const BACK_ANALYTICS =
	'block w-full p-6 m-5 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
const TITLE =
	'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
const DESCRIPTION = 'font-normal text-gray-700 dark:text-gray-400'

const AnalyticsComponent = (): JSX.Element => (
	<div className={`${BACK_ANALYTICS}`}>
		<h2 className={`${TITLE}`}>Analytics Title</h2>
		<p className={`${DESCRIPTION}`}>Description</p>
	</div>
)

export default AnalyticsComponent
