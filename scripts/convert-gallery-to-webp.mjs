import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir =
  "C:/Users/info/.cursor/projects/c-Users-info-project2/assets";
const targetDir = "C:/Users/info/project2/public/gallery";

const files = [
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_1000_666__6_-aa5cab42-79f3-4c9b-b6f6-a878bab950c4.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_1000_666__7_-67b03d49-0945-46b2-948a-63cb1afa83be.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_1000_666-feebf567-550d-4714-9cba-4d0849572211.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135254.172-3f567f81-6321-4a6a-999b-1af092bcb60a.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135323.616-53c8bb50-a590-4b90-b7c3-e6c01f835744.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135307.313-e1eda556-d482-45a3-af0f-b031d8097190.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135432.932-051872d9-b7c8-44f1-bcce-a1e99f97dab7.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135302.049-cff30d5e-03e4-41ef-b027-b2b98967f58f.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135329.879-0e03a6e3-e964-44c9-8876-12977f08aa61.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135333.582-517cce7f-efdf-4347-af3b-b4877cde285a.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135337.080-dcc360ec-82c6-4f48-a7d3-8ebe8d7bfaa9.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135312.838-3df1943c-3e74-4cc6-bf29-81e41080d712.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135351.884-9b3f8be9-7111-4121-bbca-e6443b06dff2.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135318.620-9c60b00d-587e-4f50-b454-11b94bd1571d.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135344.653-2cff07d0-ca63-47b0-8dd9-03ec1474fc0b.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135400.449-8f637fc0-51f2-417e-9896-cde2e612bdff.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135348.216-f86b2290-7cae-4cfc-9a65-1732bb032b51.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135403.637-7369ba05-d7b5-4d1a-9e4c-2d0e7450ceb4.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135412.492-f7331022-483c-4318-90a8-317876ff9131.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135356.806-1b49373e-49aa-4070-9b0c-2566a4823980.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135407.935-ce0c686f-978d-4961-a7c1-67523f3206c4.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135423.633-5b9d8af0-d681-4afb-957b-55625cb44e50.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135418.461-a656f291-1baa-4c20-9abd-8d6b4a7c7fd8.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135437.850-d9f57ca3-5080-412b-91a5-e80b02d9fca0.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135454.762-731fa3da-ed53-4aea-b749-80a533190dc1.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135505.581-39574646-c757-4eab-bb70-bd2c1bdabe86.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135340.822-3d39301c-8a91-4e50-9aba-26c403cd50bb.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135446.113-2be7700d-e427-48f4-9ac2-bd3b85dc1446.png",
  "c__Users_info_AppData_Roaming_Cursor_User_workspaceStorage_4fe207239ac212a7d199de0be4680226_images_Image_-_2026-02-27T135440.935-86e90981-b11b-4bca-9b21-7779b75f65e0.png",
];

await fs.mkdir(targetDir, { recursive: true });

for (let i = 0; i < files.length; i += 1) {
  const source = path.join(sourceDir, files[i]);
  const outName = `gallery-${String(i + 1).padStart(2, "0")}.webp`;
  const target = path.join(targetDir, outName);
  await sharp(source).webp({ quality: 82 }).toFile(target);
  console.log(`converted: ${outName}`);
}

console.log(`done: ${files.length} files`);
