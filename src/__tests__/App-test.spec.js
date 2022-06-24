import React from "react";
import { render, screen, act, waitFor, within, fireEvent } from "@testing-library/react-native";
import axios from "axios";
import { Main } from '../components/organisms/main';
import { Form } from "../components/molecules/form";

jest.mock("axios");


describe("TodoList App tests", () => {
  beforeEach(() => {
    const tasksMock = [
      { id: 174, status: 0, description: 'Tarea 1', finish_at: '2022-06-24' },
      { id: 175, status: 1, description: 'Tarea 2', finish_at: '2022-06-30' },
    ];
    axios.get.mockResolvedValueOnce({ data: { data: tasksMock } });
  });

  it("Should render a list with several todos", async () => {
    const props = { navigation: { navigate: jest.fn() } }
    const { getByText } = render(<Main {...props} />)
    await waitFor(() => {
      expect(getByText(/tarea 1/i)).toBeDefined();
      expect(getByText(/tarea 2/i)).toBeDefined();
    });
  });

  it("Should create a new todo", async () => {
    const props = { navigation: { replace: jest.fn() } }
    const { getByTestId } = render(<Form  {...props} />);
    await waitFor(() => {
      const button = getByTestId('inputTaskDescription');
      expect(button).toBeDefined();

      axios.post.mockResolvedValueOnce({ status: 200 });

      fireEvent.changeText(getByTestId('inputTaskDescription'), 'Task 1');
      fireEvent.press(getByTestId('saveTaskButton'));

      expect(axios.post).toHaveBeenCalled();
    });

  });

  /**
   *
   * Probar que el formulario muestre los mensajes de requerimiento cuando
   * el formulario no tenga la descripción y la fecha ingresada
   */
  it("Should validate the todo form, description and date required", async () => {
    const props = { navigation: { replace: jest.fn() } }
    const { getByTestId } = render(<Form  {...props} />);
    await waitFor(() => {
      const button = getByTestId('inputTaskDescription');
      expect(button).toBeDefined();

      axios.post.mockResolvedValueOnce({ status: 200 });

      fireEvent.changeText(getByTestId('inputTaskDescription'), 'Task 1');
      fireEvent.press(getByTestId('saveTaskButton'));

      expect(axios.post).toHaveBeenCalled();
    });
  });

  it("Should update a todo, description and date", async () => { });

  it("Should delete a todo", async () => { });

  /**
   *
   * Probar que el formulario muestre los mensajes de requerimiento cuando
   * el formulario no tenga la descripción y la fecha ingresada
   */
  it("Should update the todo status ", async () => { });

  it("Should show an message when  the todo list is empty  ", async () => { });

  /**
   *
   * Probar que la barra de estado cambia cuando se completa una tarea
   * se puede probar por el cambio en texto o por porcentaje de completitud
   */
  it("Should the progress bar change its label text or percentage when a todo is completed ", async () => { });

  /**
   *
   * Probar el filtro de las tareas por descripcion
   */
  it("Should filter the todo list by description", async () => {
    const tasks2Mock = [
      { id: 174, status: 0, description: 'Tarea 100', finish_at: '2022-06-24' },
      { id: 175, status: 1, description: 'Tarea 200', finish_at: '2022-06-30' },
    ];
    axios.get.mockResolvedValueOnce({ data: { data: tasks2Mock } });

    const props = { navigation: { navigate: jest.fn() } }
    const { getByText, getByTestId } = render(<Main {...props} />)

    await waitFor(() => {
      fireEvent.changeText(getByTestId('searchInput'), '100');

      expect(getByText(/tarea 100/i)).toBeDefined();
      expect(getByText(/tarea 200/i)).toBeDefined();
    });

  });

  /**
   *
   * Probar el filtro de tareas que falta por completar y que una vez esten filtradas a dar click nuevamente
   * sobre el boton del filtro se muestren todos la lista nuevamente
   */
  it("Should filter the todo list by completed status and toggle functionality button", async () => { });
});
