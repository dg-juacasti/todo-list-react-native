import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react-native";
import axios from "axios";
import { Main } from '../components/organisms/main';

describe("TodoList App tests", () => {
  it("Should render a list with several todos", async () => {
    const component = render(<Main />);
    expect(component).toMatchSnapshot();
  });

  it("Should call search input", async () => {
    const descriptionToSearch = 'Otra tarea';

    const { getByTestId } = render(<Main />);
    const input = getByTestId('searchId');
    fireEvent.changeText(input, descriptionToSearch);
    expect(input.props.value).toBe(descriptionToSearch);
  });

  it("Should create a new todo", async () => {});

  /**
   *
   * Probar que el formulario muestre los mensajes de requerimiento cuando
   * el formulario no tenga la descripción y la fecha ingresada
   */
  it("Should validate the todo form, description and date required", async () => {});

  it("Should update a todo, description and date", async () => {});

  it("Should delete a todo", async () => {});

  /**
   *
   * Probar que el formulario muestre los mensajes de requerimiento cuando
   * el formulario no tenga la descripción y la fecha ingresada
   */
  it("Should update the todo status ", async () => {});

  it("Should show an message when  the todo list is empty  ", async () => {});

  /**
   *
   * Probar que la barra de estado cambia cuando se completa una tarea
   * se puede probar por el cambio en texto o por porcentaje de completitud
   */
  it("Should the progress bar change its label text or percentage when a todo is completed ", async () => {});

  /**
   *
   * Probar el filtro de las tareas por descripcion
   */
  it("Should filter the todo list by description", async () => {});

  /**
   *
   * Probar el filtro de tareas que falta por completar y que una vez esten filtradas a dar click nuevamente
   * sobre el boton del filtro se muestren todos la lista nuevamente
   */
  it("Should filter the todo list by completed status and toggle functionality button", async () => {});
});
