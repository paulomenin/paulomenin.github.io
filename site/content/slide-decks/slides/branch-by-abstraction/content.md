# Branch by Abstraction <!-- .element: class="center" -->

---

## Content

- What it is
- Which problem it solves
- Steps to apply
- References

---

## Branch by Abstraction

### What it is

A pattern to gradually make changes while concurrently releasing software to production.

Commonly used in trunk-based-development to keep CI/CD pipelines running.

---

## Branch by Abstraction

### Concept

The concept is to add a layer of abstraction between client code and the code that needs to be changed.

Can use feature toggle on the abstraction layer to branch the current code from code being working on.

---

## What problem it solves

Isolate development code from production code.

It allows code from other teams to be released to production while another team works on
changes that can last longer.

---

## Steps to apply

### A shopping cart service <!-- .element: class="subtitle" -->

<div class="columns text-small">

<div class="col" data-markdown>

1. Identify the change
1. Add an abstraction <!-- .element: class="fragment" data-fragment-index="1" -->
1. Optional: Can rename <!-- .element: class="fragment" data-fragment-index="2" -->
1. Work on new code <!-- .element: class="fragment" data-fragment-index="3" -->
1. Toggle OFF <!-- .element: class="fragment" data-fragment-index="4" -->
1. Go Live: Toggle ON <!-- .element: class="fragment" data-fragment-index="5" -->
1. Optional: Remove Abstraction <!-- .element: class="fragment" data-fragment-index="6" -->

</div>

<div class="col img-display" data-markdown>

![Fig-1](kroki/shop-cart-1.svg) <!-- .element: class="fragment fade-out" data-fragment-index="1" -->
![Fig-2](kroki/shop-cart-2.svg) <!-- .element: class="fragment fade-in-then-out" data-fragment-index="1" -->
![Fig-3](kroki/shop-cart-3.svg) <!-- .element: class="fragment fade-in-then-out" data-fragment-index="2" -->
![Fig-4](kroki/shop-cart-4.svg) <!-- .element: class="fragment fade-in-then-out" data-fragment-index="3" -->
![Fig-5](kroki/shop-cart-5.svg) <!-- .element: class="fragment fade-in-then-out" data-fragment-index="4" -->
![Fig-6](kroki/shop-cart-6.svg) <!-- .element: class="fragment fade-in-then-out" data-fragment-index="5" -->
![Fig-7](kroki/shop-cart-7.svg) <!-- .element: class="fragment fade-in" data-fragment-index="6" -->

</div>

</div>

---

## References

[Paul Hammant - branchbyabstraction.com](https://www.branchbyabstraction.com/)
