window.onload = () => document.getElementById('accessibility-processor').addEventListener('click', () => {
    console.log('Processing...')
    let formattedText = document.getElementById('text-to-parse').value.split(' ').map(word => {
        let wordSplitIndex = Math.round(word.length/2)
        return `<strong>${word.substring(0,wordSplitIndex)}</strong>${word.substring(wordSplitIndex)}`
    }).join(' ')
    document.getElementById('formatted-text-field').innerHTML = formattedText
})