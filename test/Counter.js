const { expect } = require("chai");

describe("Counter", function () {

  it("Should deploy the contract with count 0", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);

    expect(await counter.count()).to.equal(0);
  });

  it("Should set the count to x", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    let x = 0;
    const setCountTo3 = await counter.setCount(x);

    expect(await counter.count()).to.equal(x);
  });

  it("Should increment the count by 1", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    const incBy1 = await counter.inc();
    let count = Number(await counter.count())
    expect(await counter.count()).to.equal(count++);
  });

  it("Should decrement the count by 1", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    const decBy1 = await counter.dec();
    let count = Number(await counter.count())
    expect(await counter.count()).to.equal(count--);
  });

});