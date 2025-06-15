import { Notification } from "../../../../gof/behavioral/iterator/Notification";
import { NotificationCollection } from "../../../../gof/behavioral/iterator/NotificationCollection";

describe("Iterator Pattern - Notification Collection", () => {
  it("deve iterar sobre todas as notificações", () => {
    const collection = new NotificationCollection();

    collection.add(new Notification("Sistema iniciado", "info"));
    collection.add(new Notification("Memória alta", "warning"));
    collection.add(new Notification("Erro de conexão", "error"));

    const iterator = collection.createIterator();

    const messages: string[] = [];
    while (iterator.hasNext()) {
      const notif = iterator.next();
      if (notif) messages.push(notif.message);
    }

    expect(messages).toEqual(["Sistema iniciado", "Memória alta", "Erro de conexão"]);
  });

  it("deve retornar null ao chamar next sem hasNext", () => {
    const collection = new NotificationCollection();
    const iterator = collection.createIterator();

    expect(iterator.next()).toBeNull();
  });
});
