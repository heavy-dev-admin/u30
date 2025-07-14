/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { definePlugin, type DocumentDefinition } from 'sanity'
import type { StructureResolver } from 'sanity/structure'

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (
  globalSettingsDefs: DocumentDefinition[],
  staticPageDefs: DocumentDefinition[],
  clientDocTypes: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    const globalSettingsItems = globalSettingsDefs.map((def) =>
      S.listItem()
        .title(def.title)
        .icon(def.icon)
        .child(S.editor().id(def.name).title(def.title).schemaType(def.name).documentId(def.name))
    )

    const staticPageItems = staticPageDefs.map((def) =>
      S.listItem()
        .title(def.title)
        .icon(def.icon)
        .child(S.editor().id(def.name).title(def.title).schemaType(def.name).documentId(def.name))
    )

    const clientItems = clientDocTypes.map((def) =>
      S.listItem()
        .title(def.title)
        .icon(def.icon)
        .child(S.documentTypeList(def.name).title(def.title))
    )

    const handledTypeNames = [...globalSettingsDefs, ...staticPageDefs, ...clientDocTypes].map(
      (def) => def.name
    )

    const dynamicItems = S.documentTypeListItems().filter(
      (item) => !handledTypeNames.includes(item.getId())
    )

    return S.list()
      .title('Content')
      .items([
        ...globalSettingsItems,
        S.divider(),
        ...staticPageItems,
        S.divider(),
        ...clientItems,
        S.divider(),
        ...dynamicItems,
      ])
  }
}
