# 3D Button with Framer Motion & Tailwind CSS

This project is a React-based demonstration of a 3D button effect created using the powerful animation library [Framer Motion](https://www.framer.com/motion/) and styled with [Tailwind CSS](https://tailwindcss.com/).

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Here-blue?style=for-the-badge)](https://aman-shahi-dev.github.io/3d-button)

## Technologies Used

-   **[React](https://react.dev/)**: For building the user interface.
-   **[Vite](https://vitejs.dev/)**: As the frontend build tool and development server.
-   **[Framer Motion](https://www.framer.com/motion/)**: For the animation and 3D transformations.
-   **[Tailwind CSS](https://tailwindcss.com/)**: For the styling and visual effects.

## How It Works

The 3D effect is achieved through a combination of CSS and Framer Motion properties:

1.  **Perspective Wrapper**: A parent `div` sets the scene's perspective, which is crucial for creating a sense of depth.
    ```html
    <div className="[perspective::1000px] ...">
    ```
2.  **`motion.button`**: The button itself is a Framer Motion component that handles the animation states.
3.  **`whileHover` Animation**: When the user hovers over the button, it applies a 3D rotation (`rotateX`, `rotateY`) and lifts the button with a `boxShadow` to create a floating effect.
    ```jsx
    whileHover={{
        rotateX: 20,
        rotateY: 20,
        boxShadow: '0px 20px 50px rgba(8, 112, 184, 0.7)',
        y: -5,
    }}
    ```
4.  **`whileTap` Animation**: When the button is clicked, the `y` position is reset to `0`, creating a satisfying "press-down" tactile feedback.
5.  **Tailwind CSS Styling**: Tailwind is used for all styling, including the rounded corners, background, and the glowing gradient lines that appear on hover.

## Running Project Locally

To run this project on your own machine, follow these steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation & Running

1.  **Clone the repository** (if you have one, otherwise download the files).

2.  **Navigate to the project directory**:
    ```bash
    cd 3d-button
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

This will start the Vite development server, and you can view the button in your browser at the local address provided (usually `http://localhost:5173`).
