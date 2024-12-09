class MyCalculator {
  previousDisplay = ""
  currentDisplay = ""
  previousOperation = null
  currentOperation = null

  constructor(previous, current) {
    this.previousDisplay = previous
    this.currentDisplay = current
  }

  // 숫자 입력
  pressNumber(num) {
    this.currentDisplay.textContent =
      this.currentDisplay.textContent + num.toString()
  }

  pressOperation(op) {
    if (this.currentDisplay.textContent === "") return
    this.previousDisplay.textContent =
      this.currentDisplay.textContent + " " + op
    this.currentDisplay.textContent = ""
    this.previousOperation = op
  }

  pressEqual() {
    let res
    if (this.previousOperation === "+") {
      res = this.add()
    } else if (this.previousOperation === "-") {
      res = this.subtract()
    } else if (this.previousOperation === "x") {
      res = this.multiply()
    } else if (this.previousOperation === "÷") {
      res = this.divide()
    } else {
      return
    }

    this.currentDisplay.textContent = res
    this.previousDisplay.textContent = ""
    this.previousOperation = null
  }

  add() {
    const nums = this.previousDisplay.textContent.split(" ")
    return parseFloat(nums[0]) + parseFloat(this.currentDisplay.textContent)
  }

  subtract() {
    const nums = this.previousDisplay.textContent.split(" ")
    return parseFloat(nums[0]) - parseFloat(this.currentDisplay.textContent)
  }

  multiply() {
    const nums = this.previousDisplay.textContent.split(" ")
    return parseFloat(nums[0]) * parseFloat(this.currentDisplay.textContent)
  }

  divide() {
    const nums = this.previousDisplay.textContent.split(" ")
    return parseFloat(nums[0]) / parseFloat(this.currentDisplay.textContent)
  }

  reset() {
    this.previousDisplay.textContent = ""
    this.currentDisplay.textContent = ""
    this.previousOperation = ""
  }

  deleteLast() {
    this.currentDisplay.textContent = this.currentDisplay.textContent.slice(
      0,
      -1
    )
  }
}

// 버튼 연결
const plusBtn = document.querySelector("[data-btn-plus]")
const minusBtn = document.querySelector("[data-btn-minus]")
const divideBtn = document.querySelector("[data-btn-divide]")
const multiplyBtn = document.querySelector("[data-btn-multifly]")
const equalBtn = document.querySelector("[data-btn-equal]")

const resetBtn = document.querySelector("[data-btn-reset]")
const deleteBtn = document.querySelector("[data-btn-delete]")

const numberBtns = document.querySelectorAll("[data-btn-number]")
const operationBtns = document.querySelectorAll("[data-btn-operation]")

const prevDisplay = document.querySelector("[data-previous-preview]")
const currDisplay = document.querySelector("[data-current-preview]")

const calc = new MyCalculator(prevDisplay, currDisplay)

// 숫자 입력
numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const num = e.target.textContent
    calc.pressNumber(num)
  })
})

// 연산자 입력
operationBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const op = e.target.textContent
    calc.pressOperation(op)
  })
})

// 결과 및 리셋, 삭제
equalBtn.addEventListener("click", () => {
  calc.pressEqual()
})

resetBtn.addEventListener("click", () => {
  calc.reset()
})

deleteBtn.addEventListener("click", () => {
  calc.deleteLast()
})
