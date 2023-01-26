import { createContext } from "react";
import { Pet } from './ApiResponsesTypes';

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
   {
      id: 123,
      name: 'Fido',
      animal: 'dog',
      breed: 'Pug',
      city: 'Foo',
      description: 'Default',
      images: [],
      state: 'Default'
   }, () => { }
]);

export default AdoptedPetContext;
