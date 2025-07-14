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
  typeDefs: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Create a list item for each settings type definition
    const settingsListItems = typeDefs.map((typeDef) =>
      S.listItem()
      .title(typeDef.title)
      .icon(typeDef.icon)
      .child(
        S.editor()
        .id(typeDef.name)
        .title(typeDef.title)
        .schemaType(typeDef.name)
        .documentId(typeDef.name),
      ),
    )

    // Exclude all settings types from the default list items
    const settingsTypeNames = typeDefs.map((def) => def.name)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !settingsTypeNames.includes(listItem.getId()),
    )

    return S.list()
      .title('Content')
      .items([...settingsListItems, S.divider(), ...defaultListItems])
  }
}
