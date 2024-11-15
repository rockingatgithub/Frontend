// Artificial Intelligence Page data
import AIImage from "@/assets/images/png/services/ai.png";
import AIChainer from "@/assets/images/png/services/ai-chainer.png";
import AITensor from "@/assets/images/png/services/ai-tensor.png";
import AIPytorch from "@/assets/images/png/services/ai-pytorch.png";
import AIMxnet from "@/assets/images/png/services/ai-mxnet.png";
import AIKeras from "@/assets/images/png/services/ai-keras.png";
import AIGluon from "@/assets/images/png/services/ai-gluon.png";
import AIHorovod from "@/assets/images/png/services/ai-horovod.png";
import AIScikit from "@/assets/images/png/services/ai-scikit.png";
import AIDGL from "@/assets/images/png/services/ai-dgl.png";

import { AI_ROUTE } from "./routes";

export default {
    link: AI_ROUTE,
    title: "Artificial Intelligence",
    description: {
        intro: `
        <div class="image-wrapper margin">
            <img src=${AIImage} alt="AI" class="img slide-in-animation delay-350"/>
        </div>
        <hr class="hr"/>
        <h3 class="heading-bold" style="text-align: center; margin-top: 2rem;">Deep Learning Framework</h3>

        <div style="display: flex; flex-wrap: wrap; padding: 2rem; justify-content: center">
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AITensor} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIPytorch} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIMxnet} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIChainer} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIKeras} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIGluon} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIHorovod} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIScikit} alt="ai" />
            </div>
            <div class="ai-logo-container swing-animation-hover">
                <img src=${AIDGL} alt="ai" />
            </div>
        </div>
        `,
        sections: [],
    },
};
