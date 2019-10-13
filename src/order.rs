use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Order {
  count: u32,
  diameter: u32,
  fancy_stitch: u32,
  patch: bool,
  piece: u32,
  stitch: u32,
  svie: bool,
}

#[wasm_bindgen]
impl Order {
  pub fn new() -> Order {
    Order {
      count: 0,
      diameter: 0,
      fancy_stitch: 0,
      patch: true,
      piece: 0,
      stitch: 0,
      svie: true
    }
  }

  pub fn count(&mut self, count: u32) {
    self.count = count;
  }

  pub fn diameter(&mut self, diameter: u32) {
    self.diameter = diameter;
  }

  pub fn fancy_stitch(&mut self, stitch: u32) {
    self.fancy_stitch = stitch;
  }

  pub fn patch(&mut self, patch: bool) {
    self.patch = patch;
  }

  pub fn piece(&mut self, piece: u32) {
    self.piece = piece;
  }

  pub fn stitch(&mut self, stitch: u32) {
    self.stitch = stitch;
  }

  pub fn svie(&mut self, svie: bool) {
    self.svie = svie;
  }

  pub fn price(&self) -> u32 {
    let planning_cost = match self.count {
      0...10 => if self.svie { 0 } else { 200 }
      _ => if self.svie { 200 } else { 400 }
    };

    let base = match self.patch {
      true => match self.diameter {
        0...5 => if self.svie { 100 } else { 200 }
        5...10 => if self.svie { 200 } else { 300 }
        _ => if self.svie { 300 } else { 400 }
      },
      false => match self.piece {
        0...1 => if self.svie { 300 } else { 400 },
        _ => if self.svie { 150 + 150 * self.piece } else { 200 + 200 * self.piece }
      }
    };

    let stitch = if self.svie { self.stitch / 100 } else { self.stitch / 50 };
    let fancy_stitch = if self.svie { self.fancy_stitch / 25 } else { self.fancy_stitch / 15 };

    planning_cost + base * self.count + stitch * self.count + fancy_stitch * self.count
  }
}
