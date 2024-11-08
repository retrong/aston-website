"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinity-moving-cards";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="h-[30rem] rounded-md flex flex-col antialiased bg-[#f5fbfb] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    imageUrl: "/hero-img1.jpg",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    imageUrl: "/hero-img1.jpg",
    title: "Hamlet",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    imageUrl: "/hero-img1.jpg",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    imageUrl: "/hero-img1.jpg",
    title: "Moby-Dick",
  },
];
