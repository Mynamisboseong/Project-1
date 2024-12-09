class Caluculator {
  $previousPriviewPrompt = ""
  $currentPriviewPrompt = ""
  previousOperation = ""
  currentOperation = ""

  constructor($previousPriview, $currentPriview) {
    this.$previousPriviewPrompt = $previousPriview
    this.$currentPriviewPrompt = $currentPriview
  }

  onPressNumber(number) {
    this.$currentPriviewPrompt.textContent += number
  }

  onPressOperation(operation) {
    this.$previousPriviewPrompt.textContent =
      this.$currentPriviewPrompt.textContent + " " + operation
    this.$currentPriviewPrompt.textContent = ""
    this.previousOperation = operation
  }

  onEqual() {
    let result = 0

    switch (this.previousOperation) {
      case "+":
        result = this.handlePlus()
        break
      case "-":
        result = this.handleMinus()
        break
      case "x":
        result = this.handleMultifly()
        break
      case "÷":
        result = this.handleDivide()
        break
      default:
        break
    }

    this.$previousPriviewPrompt.textContent = ""
    this.$currentPriviewPrompt.textContent = result.toString()
    this.currentOperation = ""
  }

  handlePlus() {
    return (
      +this.$previousPriviewPrompt.textContent.split(" ")[0] +
      +this.$currentPriviewPrompt.textContent
    )
  }
  handleMinus() {
    return (
      +this.$previousPriviewPrompt.textContent.split(" ")[0] -
      +this.$currentPriviewPrompt.textContent
    )
  }
  handleMultifly() {
    return (
      +this.$previousPriviewPrompt.textContent.split(" ")[0] *
      +this.$currentPriviewPrompt.textContent
    )
  }
  handleDivide() {
    return (
      +this.$previousPriviewPrompt.textContent.split(" ")[0] /
      +this.$currentPriviewPrompt.textContent
    )
  }

  onReset() {
    this.$previousPriviewPrompt.textContent = ""
    this.$currentPriviewPrompt.textContent = ""
    this.previousOperation = ""
    this.currentOperation = ""
  }

  onDelete() {
    this.$currentPriviewPrompt.textContent =
      this.$currentPriviewPrompt.textContent.slice(0, -1)
  }
}

const $plus = document.querySelector("[data-btn-plus]")
const $minus = document.querySelector("[data-btn-minus]")
const $divide = document.querySelector("[data-btn-divide]")
const $multifly = document.querySelector("[data-btn-multifly]")
const $equal = document.querySelector("[data-btn-equal]")

const $reset = document.querySelector("[data-btn-reset]")
const $delete = document.querySelector("[data-btn-delete]")

const $numbers = document.querySelectorAll("[data-btn-number]")
const $operations = document.querySelectorAll("[data-btn-operation]")

const $previousPriview = document.querySelector("[data-previous-preview]")
const $currentPriview = document.querySelector("[data-current-preview]")
const calc = new Caluculator($previousPriview, $currentPriview)

$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    calc.onPressNumber(e.target.textContent)
  })
})

$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    if (e.target.textContent === "+") {
      calc.onPressOperation("+")
    } else if (e.target.textContent === "-") {
      calc.onPressOperation("-")
    } else if (e.target.textContent === "x") {
      calc.onPressOperation("x")
    } else if (e.target.textContent === "÷") {
      calc.onPressOperation("÷")
    } else if (e.target.textContent.trim() === "=") {
      calc.onEqual("=")
    }
  })
})

//리셋, 삭제
$reset.addEventListener("click", (e) => {
  calc.onReset()
})
$delete.addEventListener("click", (e) => {
  calc.onDelete()
})
