export const supportsSpeechSynthesis = () => {
  return 'speechSynthesis' in window
}
export class Speech {
  constructor (lang, name) {
    speechSynthesis.onvoiceschanged = () => {
      this.voices = speechSynthesis.getVoices()
      // voice = this.selectVoice(lang, gender)
      this.voice = this.setVoice(lang, name)
    }

    setTimeout(() => {
      const voices = this.voices
    }, 1000)

    this.statements = []
  }

  selectVoice (lang, gender) {
    const voice = this.voices
      .filter(voice => voice.lang === lang && voice
        .name
        .toLowerCase()
        .includes('female'))
      .pop()
    console.log(voice)
    return voice
  }

  setVoice (lang, name) {
    const voice = this.voices.filter(voice => voice.lang === lang && voice.voiceURI === name).pop()
    // console.log('setting voice, params: ', { lang, name }, voice)
    return voice
  }

  say (text, delay = 0) {
    console.log('saying: ', text)
    this.speaker = new SpeechSynthesisUtterance()
    this.speaker.text = text
    this.speaker.voice = this.voice
    console.log('utterance: ', this.speaker)
    this.speaker.onend = (event) => {
      console.log('done!')
      this.statements = this.statements.slice(1)
      if (this.statements.length) {
        setTimeout(() => this.say(this.statements[0]), delay * 1000)
      }
    }
    speechSynthesis.speak(this.speaker)
  }

  clearTalk () {
    this.speechArray = []
  }

  giveTalk () {
    this.say(this.statements[0])
  }

  addStatement (text) {
    this.statements.push(text)
  }

  cancel () {
    this.speechArray = []
    speechSynthesis.cancel()
  }
}

export default Speech
