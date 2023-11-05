---
title: Test Post
description: Test post description
date: '2023-11-04'
categories:
  - Test
  - SvelteKit
published: false
banner: 1
---

## Header 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```ts:greetings.ts {3-5, 7} showLineNumbers
function hello(name: string) {
	console.log(`Hello ${name}!`);
	// Text can be highlighted in multiple lines
	// Like these three comments
	// In a row here

	// As well as single lines here.
}
```

### Header 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

#### Header 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

- Lorem Ipsum
- Lorem
- Lorem ipsum dolar sit

##### Header 5

Lorem...

```ts:car.ts {6-10, 13} showLineNumbers
export class Car extends Vehicle {
  private readonly RegistrationPlate: string
  private readonly NumDoors: number
  private MilesDriven: number

  constructor(RegistrationPlate: string, NumDoors: number, MilesDriven: number){
    this.RegistrationPlate = RegistrationPlate
    this.NumDoors = NumDoors
    this.MilesDrive = MilesDriven
  }

  drive(){
    //TODO: Implement drive method
  }
}
```
