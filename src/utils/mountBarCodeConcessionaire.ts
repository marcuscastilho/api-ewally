import { IBankSlipConcessionaireComposition } from "../types/IBankSlipConcessionaireComposition";

const mountBarCodeConcessionaire = (bank_slip_composition: IBankSlipConcessionaireComposition) => {
  let bar_code = "";

  bar_code += bank_slip_composition.field_1.group;
  bar_code += bank_slip_composition.field_2.group;
  bar_code += bank_slip_composition.field_3.group;
  bar_code += bank_slip_composition.field_4.group;




  return bar_code;
};

export { mountBarCodeConcessionaire };
