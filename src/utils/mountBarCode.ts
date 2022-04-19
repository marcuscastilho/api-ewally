import { IBankSlipComposition } from "../types/IBankSlipComposition";

const mountBarCode = (bank_slip_composition: IBankSlipComposition) => {
  let bar_code = "";
  // Código do Banco na Câmara de Compensação
  bar_code += bank_slip_composition.field_1.group_a;

  //Código da Moeda
  bar_code += bank_slip_composition.field_1.group_b;

  // Digito Verificador
  bar_code += bank_slip_composition.field_4.group_k;

  // Fator de Vencimento
  bar_code += bank_slip_composition.field_5.group_u;

  // Valor
  bar_code += bank_slip_composition.field_5.group_v;

  // Campo Livre 
  bar_code += bank_slip_composition.field_1.group_c;
  bar_code += bank_slip_composition.field_2.group_d;
  bar_code += bank_slip_composition.field_3.group_e;

  return bar_code;
};

export { mountBarCode };
