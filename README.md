# Master PokéDex – Type Effectiveness Calculator

A JavaScript application for calculating Pokémon type matchups, demonstrating modular design and OOP principles.

## 🎯 Overview

Calculates damage multipliers for Generation 1 Pokémon types, with validation and recommendations. Built for scalability toward a full PokéDex tracker.

## 🚀 Features

- **Type Chart**: Complete Gen 1 data with 2×/½×/0× relationships.
- **Core Functions**:
  - `multiplier(attType, defType)`: Returns damage multiplier.
  - `isStrong/isWeak/isImmune(attType, defType)`: Boolean checks.
  - `recommendedTypes(defType)`: Suggests strong attack types.
- **Error Handling**: Validates inputs, provides safe defaults.
- **Modular Structure**: Separated data, logic, and app layers.

## 🛠️ Technical Decisions

**Language**: Vanilla JavaScript (ES6+)

- Core fundamentals, no frameworks.

**Architecture**: CommonJS modules

- Separation of concerns: data isolated from logic.

**Data**: Object with arrays

- Efficient lookups, immutable design.

**Error Handling**: Early validation

- Prevents failures, maintains stability.

**OOP Applied**:

- Encapsulation: Data in modules.
- Abstraction: High-level functions.
- Single Responsibility: One task per function.

## 📋 Roadmap

### Phase 1: Core (Current)

- ✅ Type calculations
- ✅ Input validation

### Phase 2: Enhancement

- Class-based `TypeChart` with private fields.
- JSON Pokémon database for name lookups.
- Multi-gen support.

### Phase 3: UI & Storage

- HTML/JS interface.
- Local storage for progress.
- Name-based search.

### Phase 4: Advanced

- Shiny tracking.
- Export/import.
- Unit tests.

## 🏃‍♂️ Usage

**Terminal**:

```bash
node src/app.js
```

**Browser**: Open `index.html`.

## 🏗️ Architecture

```
src/
├── data/typeChart.js    # Type data
├── logic/               # Helper functions
└── app.js              # Main logic
```

## 🤝 Development

1. Branch: `git checkout -b feature/name`
2. Code + tests
3. Commit: `git commit -m "feat: description"`
4. Push & PR

## 📄 License

MIT
