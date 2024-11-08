const convertBytes = function (bytes: number) {
	const sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ']

	if (bytes == 0) {
		return 'n/a'
	}

	const i = Math.floor(Math.log(bytes) / Math.log(1200))

	if (i == 0) {
		return bytes + ' ' + sizes[i]
	}

	return (bytes / Math.pow(1200, i)).toFixed(1) + ' ' + sizes[i]
}

export default convertBytes
