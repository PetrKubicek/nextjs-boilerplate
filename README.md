This is a boileplate featuring my go-to techstack.

## Getting Started

```bash
# install dependencies
pnpm install
# run the development server
pnpm dev
```

## Project organization

The projects uses Next 14 abillity of colocation for view components. [`Learn more`](https://nextjs.org/docs/app/building-your-application/routing/colocation).

[`Route groups`](https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups). are used for better route organization. If you e.g. add auth routes in the future, you can create `auth` group. The groups are used just for the organization purposes and they won't affect the final route.

## Features

#### [`Pnpm`](https://pnpm.io/)

- It installs all dependencies into a single central store.
- Provides a faster experience.
- Results in a more readable and less conflicting lock file.

#### [`React Strict Mode`](https://www.typescriptlang.org/tsconfig#strict)

#### [`TypeScript`](https://www.typescriptlang.org/)

#### [`TypeScript Strict Mode`](https://www.typescriptlang.org/tsconfig#strict)

#### [`ESLint`](https://eslint.org/)

Configs:

- [`eslint-config-next`](https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

Plugins:

- [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports)
- [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort)

#### [`Prettier`](https://prettier.io/)

#### [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/)

#### [`Jest`](https://jestjs.io/)

#### [`Playwright`](https://playwright.dev/)

#### [`GitHub Actions`](https://docs.github.com/en/actions)
