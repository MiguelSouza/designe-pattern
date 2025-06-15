import { Editor } from "../../../../gof/behavioral/memento/core/Editor";
import { History } from "../../../../gof/behavioral/memento/core/History";

describe("Memento Pattern - Editor", () => {
  let editor: Editor;
  let history: History;

  beforeEach(() => {
    editor = new Editor();
    history = new History();
  });

  it("deve salvar e restaurar o conteúdo corretamente", () => {
    editor.write("Olá, ");
    history.add(editor.save());

    editor.write("mundo!");
    history.add(editor.save());

    expect(editor.getContent()).toBe("Olá, mundo!");
    history.undo();
    const lastState = history.undo();

    if (lastState) {
      editor.restore(lastState);
    }

    expect(editor.getContent()).toBe("Olá, ");
  });

  it("deve retornar estado vazio se não houver memento salvo", () => {
    expect(history.undo()).toBeUndefined();
  });
});
