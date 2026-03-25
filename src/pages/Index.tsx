import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Code, Search, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
  { src: "https://www.facultyplus.com/wp-content/uploads/2025/08/College-Logo_blue.png", alt: "Madras Engineering College" },
  { src: "https://www.sriisaitravells.com/logo.jpg", alt: "Sri Sai Travels" },
  { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAw1BMVEUANP/09PQAMf/Ax/z79+4AJf/18/X///FRdP/x8fX49PHx9vYAOP9vkvv///YALf8AFP+juv74+fUAIP9Xbv7t8fjGzPGSo/z89+b7+fnAxf8AAP+1xvkAPf/2/O/o9OuPqPxndv1UdvhqjPjDwfFPg/zD1urE0e49UfOarOwvPPaAhP+t0fyst/ifu/rf6/j97vdwlvb//+deaf8AT/91jf+w0e5ohf/L4/ovW//X3fzz7vyfr/8gSP9/kfy3x/Cgv/U2PB6cAAAEV0lEQVR4nO2b7XLaOBRAJWGJyHYkR8YBExAk2TRtttuwaXa7Kduk7/9UlZyZXYy/B2Tz457JZIYZkM9cCenqSiAEAAAAAAAAAAAAAAAAWMK27yNONf6DoCWRbZ61XKKelBCS5lFhSJpB/QUKkZDGtA3mXb1FCsnb+ei3UQsu7pZRbz34Yay8FsyEXq2X/SgRcs8CxnAjHGNfLD72EiqCLhX2m53exdJF+P6hU5LiYh05FuosZXpwtZTuR3s3KZ+JO0pOSyplTHyixPkk2kmKMT6bU/cze8cxhb1RDxM7SIGUC6mgd6nGJi4VHyBStY3YSPEWScJRpZpayKTaO/U2pvziQK8O3VGkZGPqfSnEWOzhKYdSBD1c35zVcfP754s/vlzsYF58edw4kzLLOVloPa5FXUd7xNHVn2OXUvFotuV1bFYTs+qHO6BlSM89d90XSnr/xPw6dDKhdvuwu+2U8W3qTkoSOsI8qIPxr3bru+tEQnnurvtM87FZ2VgdKpnIQn5LXUqZ5kdew3RdkCJWSjiUMt1XOWT/l9r7DEiBFEiBFEiBVEuMVFVm6/s40Lx3KZO8ybngqgLmsZk3RPfFU6XScoLU0yxNB5AyWlVE1GTjz0n/UrZoWnnYQhCN/2IDRKqmAULi57/5AN1X5Wn/0ed1IHSWDg8rRbKDNNutkn77RwR6cwKRyqSQNDu7l4WHA3+jguGlzP7GatEfazFWW6YCdgqRsuc9Un77LpivsVJJ/zN6mZTZ/75cBlr7yVbhLR5iRt8hm7IQih/+TXKr4cCRMlJmtvye6txThpQi0pYWXkZCMf+UImW+c1xpluTrrsOOqfjm0YSJaz9fXBhQSprvnGA4wCkP8llfQQrVSbGjpC7ZxGTWuenjEy4rTSs+2XuImTXo+bhQM3qvKGHvjYYHndcSO7ZtPS8622q93fqsqBUkZ3uHwoQi+ioqamwJXlBZDG0HQvsXSjq5Tznf+t6sZBPhZfWp/KWWkL6OK6qR+OmNyraXiMojZSNAf0wDnWbTwLak/0zqYvXzlVh5KyrqttvZKD58TJnvnNY2Qgn3Si5qMJ18vdqvWUdXr1UFbq0X5KBA2QiYIav4hmPfJCo4wcXtVjL78DNX27fF/Z+fr6vOAq4fDryWYBbf5s0o9sReNIQYT6PKc5ODRnlGG6lCnzImpvTgRx8mZSeg3EtupOLKJo9xhtUkpZRfCJafRapsJ3SUFaZVpAr4Nd13BK22Urn1BDPldEy1KAWV4XaggxRIHZmQ0PksOS0ps/WkF5XZ9lCRMont3QlKyeWqw0WWXqQM0VpkVp3UnI4p+y9cpBynXZyY80gh8nEhzDam/c2fYIX9dXXqciSr5XolxKzN9e53FBdrx5EyROju07zNPfiM+dv94ubwpLcB0nhfae/yUhxT57fhzYaUyMoaf9kvLJzHyaa1Ei07bdYOqxa0ouPusb/ffAAAAAAAAAAAAAAAAJwqvwCd2GvpaByGDwAAAABJRU5ErkJggg==", alt: "21st Dev" },
  { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAwFBMVEX///93uQAAAABxtgC12IKAvgR3d3f8/vaSkpJutQD29vZnZ2f6+vo3NzfU1NR5ugy2trZOTk6Dg4PLy8snJyebm5vt7e2lpaXm5ub9/vr3++/u9uCMjIyv1XqVlZUcHBwxMTG+vr7j8M/S57RISEhVVVV2dna+3JPH4aG52oujo6Pc3NxBQUGNxDjw9+LZ676cy1fP5a5hYWGp0W+EwCWOxD2fzGDf7siVyEvY6r2hzWgkJCQWFhaWx1bo89fD35sUhDnNAAAQeklEQVR4nO2da3vaPA+AEwxN0xOsHaUkpS2wFljLaYRDuw3+/796YyBgWXIScoK9T/Rl14jjJHckWZIdV9NSEKOsZy6lNB4kluQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuOQUuNSZuRXG5T9IwbLtVre3Gn8O5/Nhu9spTmYLRzdTZ3EqFAyr1Zn87evMZPBA3bJbq69F2UyTxClQMKxxY7p/43WqzaDVW5RT04mjUzCGxb4JXjRJgcvgc+akA+K4FIzxl45UXUmBn/A501PgcEwKnzNGWbsfBY2TcxL3EUejYBexFoSi4MqykTCHI1Fo+7zPYAquQnRK5j9OweqUlAjcOClcJ/WukxyH7CnYDdq/MTdmLE1nxV6v8TUajWaTYnfesn0Uo94tJ8UhawrLCcWAmfq00ZlbhuE+nM48MfWys+jNB6rOrF5CA0a2FGyKAXMJfFqG10bOphgrLzpLhU4MZolgyJKCRdgC00cd2xBbUTmlC6qj0Ih5PwEO2VEwVmX5fhmbdmzUjs6smT4bkgphJGAWmVH47MuuzH2uOfVUqvoCM6djgzhBW07jYsiIwnKEGfRoHferspjOmNKHeudfoFAvykkQ0zvka9WCak2m06ZOajmx1CELCkM5SGJmT8UguOJmTikdqs/ixA7pU7CQMZgTy6d9YN3RZUid142BIXUKY9kYTKfle8K+7miqyo6M7GKJxqBToTAYYYfgmy0NWu1Otz2ct5at4XjVG5XooiOj1MFYRMWQLoWx7BHMxVLZ2J73Fk5Zh9mUsVwRhRgXwwIFGq5MIlpFmhSsCQqTegpFsFrFqVdWRE2sNlFgYuVPop9VNG1IkUJLjm1ZeUg2NFoTsZ5IgbKLhNF3iIbtE6OAIhnWJ4eGQWcKNZ5WFwtzYDOi6bx0QhQsNH6zL+rxiExb5T0HE8R1QXBtRRgqUqKAYznSq7dmxAigHkNQ/sgcIoJaHh5HpkOhi51ZF7eyZ2Tx0a+8VEQDLzFU2AfP96ZCoYEGLIajf0NVSPaNJ4bIgIihd3ACFIwphoAHhzEx+G0iRv/eLVRVSQBD8hRswjshCNYCOU9z2mnzqtOg/9Wdq5MtTUN5CYHBPsw1JE5hjq+BNQEpgumsPHdv8OqrPvpUG4YcIVIusnUQhqQpjPElTNknGHJMafbb+2fe5JSMOYQ/3Yrkd9iUGDA/D8GQMIUOvra5ktrYUoGM6V3xve8ya7NPpQprkTCyEaE4hwTTyVLoEWnPRGozl4ZzOS/a1xeYTtaVuMwCLsIFZTFZUZDzaFf60muSTQZFU2KVhY0VF0KGh9XGWISGkDAFbIxM8lxIT9HrBrUmRiWO2PComIx4IxlRMPqIAnxJHcm9l3EtXqq4UfUIeZBgDdzm65S8I4Ppr5TwlYnKGaTApih0MORYgy2wc8Tha4YUiKANHJfyAKp8KOkCKrUOULLk4IFS1rlsKWgN+RZNEDLBYEZ2GmtBs7XQaIioDBvNofXopCkgZWAjcBw4DrqGKmeEjmgT+PlM7FrGh5YfE4+g0ShtAv8Ic+4+kS8gCiKrIoaAY4qDISRPAeUx0IFbDjhGDITErIyn8gYe/Uw8Ro5PodaEPIMOnBfwj5K5KCiwxeaIHHrrhO+kKjzHoIA9A7hTqRCERwlCFzYhpBx6cwhFdHqkWnwKVRa5KiYpA9AVNgtDQS8bZLZKREtEOnccCha6WagM8CBSBnJFT5F6PAICfgPHokCMZiAuAImnZ/P+FHSdmHsjxlk6bA4mk0r11ZEu4jtMyGkjTYHQBDQ1VSdna1m3G8ghFQpz9OJAeAfH85IU/4b8bgqnkbguuxY3drVRlTMLCiirlfR+5Ocgw1HAkcaSWlbMSpuYre2/bDodCshBmkDvB0x9LBQFVka5Q5t6THOxC047fmaR0gwdCl1g3gf9pwmcZwgKJp6f7JEQRH9k+XxOkNZsreyopMogXLgLXEMwBRwrWeRCYNl12MoVYGlRsOULwTk6qZQilkmCKBA1WbRSYt2OWC0xx9NmqVIIsokWuB022yeXARTMESpKdMl2fXJB4Jic0E5vFYespNJYMJYw7Bj5UmC6PLuB53g2ECaKST7ya4L0KFgodoJjAfRnbLeW048CG6GxgbQGnSFYe1liJ5LiuiZUG5Pq0TAFZ862ZqSmwBw8PUFmT4wobYvSls0izTVuK9kVObBWLM+zbRbAqSiwMl46vSS9HbnQB4glJRyprncMcA1yudzs81eoyiM6RKU5/IpQWaDzTpWCIdusKWVAcqxjLuZanaiymIQtaHPyI7oga9iIBafv0l37iupOUrSMa4RmaeWIn13zL+ucFTFBhRfRbc6f+S0A8WSuZ2gRcljA71LKgvCCNKYNxsVpab28Ry+NOm3KyOsKY1DPcouCwu2018TjJEdSWAPVT7YutG6pfVyXXtNIRFSEEB8Ypf5lABooZAzaULLvoC+MFfGfqwiqeX54Q5lGTZ7giRQZg/QVnD8Fq6v4dDCcIrTIL80y+GIIT1CgCslA/NLSj4LdU3xdzejvqSSxinSVIYvvpnCgj1V3UHR8dyThYim3oGB6MShQ0tSmlNE3dEgbqMDGao82W9Ao1sTPJ8rdCoj0gpChIq3OigIxn0+tStMGn1+OTuw8YNjdr5KyUsT69LIfKHO0WDRzCnjxG3MUr2/Z7rSF/QasVrc3U3w8temoHGZkaI18d+/I6gtjYt2BYlXn+hs6veT0+46zjp38tuWR1koqJIBBlt9Z46lW8vPQQ/ZxM0vq9bF7GfYDd3HJ7pt7G8fK5MdkYSkwsx9icKyPw2zgkuH+C2htGj3Kh6Ng6o0Q44IdcleCTPfiIFaeYQcfggIzF93g+KA+HIXdmSHbHUmIhRg6k3ZVCKzEm9Oecpn4XuxVP/xuZxnvToM/NOXP5fQE7fatvpr6X2kDE/oyn6ODvqTLfKciVPlcP52+WHkPp9qRxCWwmLRDZExGq3HoHmfZ79dE7VGjc3e3aLQHm52KpMfnOxZNRz3fzZs8qdud6eH7/h1j766W4tt4ZrL+V3E1mrrxUnktjtOfjhqr+TJM0hwVwZEoaJoyudvuYGYNBrZtDwZWmD3dPFl2gsOjk6Kg1X1W2Rzy5Lv+hsU4+x0ebWfDelcV1B1Mwe6OyI0i/wEK2noLJ+reD6IwaE8S2CP4uDueLntE2SA0hcFnsZTMjtHH3v223p7IIMJQsFrjmaMnthXusSlom12ARbsOoGAtPxvTBAmcCAVXjMF4Mi1tdyZSV1+Xre5kvVd4ggBOiAIXw1p21xui4wMDu9VtpLlX+ulQ2IjLYvY1KfY6q+6q0ys2Jl9/p7zwlu6++adGAex4mtkfDTg9Cvnfj+CSU+CSU+CSU+CSU+CSU+CSU+CSU+CSU+CSU+CSU+BiSHlEFnJ6FOrFI8ixHzqXXHLJJZdccskll1xyySWXXHLJJZdccsklFyS3tDw+Pj79rNxcXMnta+eCPD5QXVbEFk181vakq+o5kmr1Z61y94Avu5H3R6FthW5zVZXk6S6YQsFfni+r8Emr4PB5YJe19Z19iD/dbJpdfPe57OtjkyBREdv8oh+oiTr7EZsCl5ea0P4dHHolenwALS7WFL5RFK4DrnuJXiKgcEk/0CXu6D0JCq4I2vcbHLjHPdbE4xtM0SgUCtcShxAUHohubhOiUPh14Z3wBH4njBM8cS0WhULhDdhFCArnVC8XZNPDKRSuvbd+A+8SdXhFXD86hf11w1GgO61RTaNQKHx4QF/EX18QZnCnH1pcCoWXe0XfJIU7sg/KfUWjsHvtj+BX5HnOxKO1+BQKH3ujCKZA+EbyLiNTKDQp3Gis/CMe9UKDOBQKZ+EpUL6RS5B/DHknXK43L+UKmISsbMBtXGtJUCjsRopACmI0I+rsd2Isi0jBGxCAzhek8BH46J+hKfw528Ssl68Em4+wFMTo7PpB7EkRaJIUhBD67RW88rV825wCTaIJ7+OHeMwzx2AK3/de9r0GIk0unjIEURDv7Fy7Ff4X4B/B1WDQenNbkGTz3i8AHzhW3ouHXnZsgikAlW1KwbUXLAdREH3jAzROf/8IriYPezfS3Wzf+5v42zU4CQSO1agUtAtwQqEQjsKD4JlfJb3094++FGSfu+0KmgSgDEaqm8gUNA26h0ooCuIr4GO0GOZ+940f/SnA63o+/x6oyJPQ/J5oHY0C6MnDH0BBtFRu3OAd+vrHAAowJ/Y0E7zxb0JzoCX7UCICBRic/Q5DQbz4Jsb4pbjNQylI9YTtvYIc/o8wVoJBdGcQkShAZQhDQXw3d7i9n38MogDrCdue7p/FH/djJXiwvUFEogA9w3swhQvh2DP+ydc/BlGAKaLHE5jEfqwEyB5jUgApfCWYgugbPV8ljmbPijJeGAoacAxk+PJC3/jeIKJRANeoBVMQfaNnpMBPNTWlBFIAr92jAI1297yvwo9CKhiNAniCaiAFUQ93lcYr0XR9/GMgBeCrd3kNYOOlC2BkEs0wEgVgXk+BFMRAdz8qgrsnK+bhKID0aEcBxIhetgNuUjCIaBQA08dACuKhvRoClGTFPBwFYOs7CtAkto8gKggIrOPrQiCFiuIIyHmiUwABw74mLAYkW78DQsozsY9IFEAyFGgR4hXEyvVPfJ8JUgC9b8ZK4M5Eg4hGAYRmQd5RNJ8/4gGgtMr8OioFIrQTA0dYlY1EAbienwEURC/4BLoBl1aVnKJS0PCDiU8FDCIaBXHYDYqaQGwHQ2VwDgSUAAVgEvxV3SgaRqVQwOcoKYgHZLUXz/mj0RKZAhjIPiQsz7CnKBSAQWzHPiUF0Ve/nj+K8gTKAAr/GJkCzHbcuxQrO9AgolC4AhX9gJxSVYDHopjijU4BHGiCcpeMPAIFWPO89KcAJ4p8hfaP0SmAqOYWDmxSR4dTgGUNb45LQeECl8uVQvvH6BTgLBQIHOU53EMp3IP6bmGXASgo4IUbarkm8+sYFECG8SBmb3KN7zAKD2j2/bvmS+GX3N5PyPU9MSiAoRE8p8w7mMLv5h2XZuXnLTE55c280xTC+0ZwmhvsVm/PK1cxKShn95AjjjlPuaNKUyAXbqjFy6/fXe3lClyNSQHNXW0FFb1jUtgtwiApgH5+1SgBq5C2/vFmM5I9fOPDehwK9JIJbBAxKexrRCQFcBd0oRm8ru1yFFcpXv8UXqruvd3FogBHiZ3gzC0WBcFxkhRE3/hBV1jh61o/RLPwqL283lULlXe3p1gU4By+J3gVUawVPUKdjKIAfKOimgQvtT7x3H2Wl8uHpnu3hed4FOiBmpjhik7hVSwWUhTA/almXoBJrKeRzty2/AYu791/4lEAJV5PPnAf0SmcB670E3v5pppygAvz+Kjw5PrGl7cKf6LC73gUyMVUxLK6iBSe36R3S1Ag6vWEwGtx79F0g/7vb9qPa5fQW0wKlEkQ9W64wsWj4Bv9P19fNlFPxDpoEDeqS+1wUOeP8Vx4f3vS7j4qP9wbOhPkklKo5tu+gfxutPvbtzMob9R04NW52Mxb+IbO5XJ7+/hUa97dkLnfjXgvmyKcuJBfqQpuiHQmNuQBzfsmrnn/IU4l/vfk3bUSPtQHLoz9P5ebSrW2roT8D2Gyf/C2mr8tAAAAAElFTkSuQmCC", alt: "NVIDIA" },
  { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAPDRAQDxAPEA4QDw4NFRcODw4PFRUWFhUVFRYYHSghGBolHhUVITEhJSkrLi8uFx8zODUsNygtLisBCgoKDg0OGxAQGy8lICYvLjI2Ly0tLy0vKzAtMS0tLS0tLS8uLS0vLTUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAKgBKwMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABMEAABAwIBBQoICQwCAwEAAAABAAIDBBEFBgcSITETIkFRYXFzgZGhFDIzNHKSsbIjNUJSU1R0s8EWFyRDRGKCk6LC0tNj0aPh8CX/xAAaAQEAAwEBAQAAAAAAAAAAAAAABAUGAwIB/8QANBEAAgIAAwQHBwUBAQEAAAAAAAECAwQFESExMnESM0FRgaGxExVCUpHR8BQiNGHB8SPh/9oADAMBAAIRAxEAPwC8EAQBAEAQBAEAQBAEAQBAEAQBAEB8JsLk2A4TqCA09flVh8F91qorja2M7q4dTLlSIYS6e6L9PUjzxdMOKSNDV5zaJtxFHPKeA2EbT2m/cpcMrtfE0iLPNKVuTZpqrOnMb7jSxt4jK90ncA32qRHKY/FL88yNLNpfDE1k+cfEXeKYY+jjv7xK7xyyhd78ThLNLnu0RgyZb4m79qcPRZG32NXVYDDr4fU5PMMQ/i8kdDsrMRP7XN1Ot7F6/R0fKjz+tv8AmZx/KnEPrc/rlff0lHyIfrb/AJmdjMr8Sbsq5f4rO9oXl4Kh/Cj6sdeviMuDL7E27Zw/kfGz8ACvEsuw7+HzZ7jmOIXbr4Gypc59Y3ysMEg/dDo3dtyO5cJZVU+FtHeObWLiSN3RZ0Kd1hPTyxcsZbK0duie5Rp5VNcMk/IkwzWt8Sa8yS4ZlVQVNhDUx6R2MkvE8nkD7X6lCswl1fFH/SbXiqbOGRuVHJAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBwmmZG0vkc1jRrLnkNaBykr6ouT0R8bSWrIpi2cKgguIi6peOCEby/pu1Ec11Pqy26e17OZBtzGmGxbeRD8TzlVslxA2OnbwEDdZB/E7V/SrCvK6o8Tb8vz6ldZmlsuFaeZGavEKqrdaWWadx2MJc8dTdg6gpsa66lsSRClbba9rbM2iyRxGbxKWUDjltCP6yFznjKIb5Lw2+h0hgr57o/XZ6m8pc2Va7yskEQ53SOHUBbvUWWa1LcmyVHKrXxNI2tNmrZ+tq3HkjjDO8uPsXCWbP4Y+Z3jlMfil5GygzZ0DfGfUP8ASe0D+loXGWaXPckvzmdo5XSt+rMtmb7DBthe70pZPwIXN5jiO/yR0WXYf5fNnaMhML+rdskn+S8+8MR83kj0sBh/l82HZB4Wf2bskkH9y++8MR83kg8vw7+HzZ0SZvMNOyKRvoyPPtJXpZliF2+R5eXYfu8zBqM2FGfJzVDDylj2j+kHvXWOa2rekcpZVU9zZp6vNbMPIVMb+ISsdF3guUiGbR+KP+/YjSymXwyI9iOReIwXLqd0jR8qC0w7G77tCl146ie6WnPYRLMBfD4deW00D2kEhwII1EHUQeUKWnrtREaaejNtg+U9bSW3Cd2gP1UnwkVuLROzqso9uFqt4l49pIpxdtXC9ncWBgGcmCWzK1vg7zq3Rt3Qk8vCzruOVVN+WTjtr2rzLajM4T2WbH5E5ika8BzCHNcAWuaQ5rhxgjaqxpp6Ms001qjkvh9CAIAgCAIAgCAIAgCAIAgCAIAgCAwsUxanpW6dTKyIcAcd870WjW7qXSqmdr0gtTnZdCtazehAMbznON2UEWiNm7T6zztYNQ6yeZW1OVLfY/Bfcqbs17K14v7EUEWJYm/StPVG/jHVEw8hNmM7lP1owy02L1+5A0xGJeu1+n2JFhmbGofY1U0cI+ZGN1fzE6gO9Q7M1guBa+RMryqb43pyJXh2b/DobF0bp3Dhndceq2w7QoFmY3z3PTkT68uoh2a8yR0lHFCNGGOOJvzYmhg7lDlOUnrJ6kyMIxWkVod68noIAgCAIAgCAIAgCAIDAxXBKWrFqmFknAHEWe3meNY7V1qvsq4HocraK7F+9akAygzaObd+HyaY27hMQH/wv2HmNudW1GaJ7LV4r7FTflbW2p+DIBU08kT3RysdG9ps5jwWuB5iraMlJaxeqKmcJQeklozb5NZU1NA74M6cRO/p3k6B4y35juUdd1HxGErvW3f3kjDYyyh7Nq7i48AxyCuiEsDtlg+N2p8TuJw/HYVnL6J0y6Mv+mjovhdHpRNmuJ2CAIAgCAIAgCAIAgCAIAgCA66moZEx0kjgxjGlz3O2NaNpK+xi5PRbz5KSitWVxlBnIc87lhrDrOiJ5G3e4n6OP/vsVzRliX7rn4fd/nMp78zbfRpXj9kazD8iMRrn7tWOMIdtkqSXzEcjNo5iQu1mPopXRrWvLd9ThDAX3PpWPTnv+hNsHyDoKaznM8IePl1G+bfkZ4vaCVW3ZhdZsT0X9fcs6cvpr7NX/ZJ2NAADQABqAGoAKC3qTdx9QBAEAQBAEAQBAEAQBAEAQBAEAQGnykybp69mjM3RkA+Dmb5SM/i3kPt1qRh8TOh6x3dxHxGGhfHSX1KXx/BJqGYwzjlY9viSs+c3/rgWkovjdHpR/wCGbxGHnTLoyOOBYxNRTNngNiNTmHxZGcLXcnsX2+iN0OjI+UXypn0ol54Hi0VZAyohO9eNbT4zHja13KP/AGsvdTKqbhI1FN0bYKcTPXI6hAEAQBAEAQBAEAQBAEAQGLitEKiGWBxLWyscwubtAOo2vwr3VN1zUl2HiyCnFxfaYmCZOUlEP0eIB1rGV+/ldzuOzmFgul2Jsuf734dhzpw1dS/YvubVcDuEAQBAEAQBAEAQBAEAQBAEAQBAfNMcY7V90Z81QDgdhB5l8Pup9QAFAajKjAY6+ndE+weLuhk4Y5ODqOwji6lIw2IlRPpLd2kfE4eN8OiyiKqnfE98cgLXxucx7TwOBsVqYyUkpLczLTi4ScXvRLM2mOmmqhA8/BVRDNexs3yHdfi9Y4lAzHD+0r6a3r0J+W4j2dnQe5+pcSzpoggCAIAgCAIAgCAIAgIbnMxaopYYHU0ronPlc1xbY3Gje2sKxy6mFs5Ka12FdmN06oJwem0r38ssS+tydjP8Vb/ocP8AKVH6/EfMW/krUvmoqaWVxe98TXPcbXceNZ7ExUbZRju1NFh5OVUZPfobVcDsEAQBAEAQBAYBxqkBINTTgg2IMrLg9q6+wt+V/RnL21fzL6nbTYlTyu0Yp4ZHWJ0Y3te6w2mwK8yqnFayi14HqNsJPSLT8TKXg9hAEAQBAEAQGLi3m8/Qy+6V0q41zR4s4HyPOwWuMeWFme8tVdHF7zlU5twx8S4yjfLwLBxpx0Y2aRYyWeKOR7Touax19QI2aRDWXGvf6taqaVtb7l+fTf4Ftc9iXe/z67vEhGTj3Bu6+TkbDSys3sURndJKWaLNyaNKN3ikPuQ5wOo2KssQk30d61a7Xpov7e/t2dhW4dvTpbnon2LXV/0t3Zt7Sx1TluVTnZwoRzx1TBYTtLJLbN0YBY9bbeqr3K7ulB1vsKLNadJKxdpBGuIIIJBBBBGogjYQrXeVKem09B4FX+E00E/DLExzrbA+2+HUbrJXV+zslDuZrqbPaVqXejOXI6hAEAQBAEAQBAavKLHYaCEyzG5NxHEPHlfxDk4zwLvh8PO6XRj/AMOF98aY9KX/AE0+b7GZq1lTPOdZnDWMHiRs0G2a3tUjH0QpcYx7jhgb5XRlKXecM5GC1NZFAylj3RzJXOcNJrLDRt8ohfcvvrqk3N6bDzmFE7YJQWu0gP5B4p9W/wDJF/krb3hh/m8n9ip934j5fNfctnJikkgo6aKVujJHE1r23DrEco1KgxM1O2Uo7mzQYeLjVGMt6RtFwOwQBAEAQBAEB51xHy03Sy+8Vr6+BckZC3jfMlOar4wP2eX2sUHNOo8UTsr67wLhWeNCEAQBAEAQBAYuLebz9DL7pXSrjXNHizgfI87Ba4x5YWZ7y1V0cXvOVTm3DHxLjKN8vAs6eFsjXMkaHNcLOa4XBHKqRScXqi6aTWjMODCIWOa/4R5Z5PdpJJhHqtdoe42NiRfbZdJXSa09El6HONMU9fVt+pnrkdSJ50KUPw57jthkhkHW7QPc8qfls9L0u9P7/wCEDModKhvu0+xTK0Zmy5s18+nhzG/RyzM79P8AuWczKOl7/tI0mWy1oX9aksUAnhAEAQBAEAQGHi+JRUkL55zZjBew8Zx4Gt4ySulVUrZqETnbbGuDlLcinQ6qxuuAJtpX1bWU0AOu3Ht6yQtFpXg6fzazPa2Y27T8SLkwvD4qWJkEDdFjBYcZPCSeEnas7ZZKyTlLeaKuuNcVGO4wcpMoocPYx87ZXiRxYBCGuIIF9ek4Lph8NK9tRa2d5yxGJhQk5eRH/wA6FD9DV+rH/sUv3Vd3rz+xE9609z8vuS3Cq9lTDHURhzWSt0mh9g4DlsSO9QLa3XNwfYWFdisipLtMXKPHosPibNO2R7XSCICENc7SLXOudJw1b0r3h8PK+XRjz2nPEYiNEelIjn50KH6Gr9WP/Ypnuq7vXn9iH71p7n5fcfnPofoav1I/9ie6ru9ef2HvWnufl9z7+c+h+iqvUj/2J7qu715/Ye9ae5+X3Mygzg4dMQ1z3wE7N3bot63NJA6yudmXXxWumvI615jRPZrpzJSx4cA5pDgQCHA3BB2EFQWtNjJyeu45L4DzriPlpull94rX18C5IyFvG+Ztsisbioard5myObuT2WiALrktt4xAtq41wxlErq+jHv7Tvgr402dKXcWHRZx6OaWOFkVUHSyMjaXNjDQ5xDRe0mzWqieWWwi5NrZz+xcQzOqUlFJ7fzvJiq4sDorayKBhknkbGxu17zojm5+ReoQlN6RWrPM5xgtZPREPr85lGwkQxzT2+UAImH1tfcrGGV2viaRXzzSpcKbMOLOnETv6SRo42SB57CB7V0eUy7JeRyWbQ7YslGA5VUdbvYJLSWvuMo0JOobHdRKg34S2nbJbO9E6jF1XcL29xu1GJJi4t5vP0Mvule6uNc0eLOB8jzsFrzHlh5nvK1XRxe85VGbcMfEuMo3y8C0FSF2EAQEdzhPAw2pvwiIdZkYFMwC1xEfzsImPemHl+dpR60xly3M0gPgMnLVSEfy4x+CoM165cv8AWaDKl/4vn/iJsqwswgCAIAgCAICmc4eUfhlRuUTv0enJa22ySTY5/LxDk18K0eAw3sodJ72ZzMMT7WfRjuRO83WA+CUokeLTVIbI++1jPkM5NRueUniVXmGI9rZoty/GWuAw/sq9XvZK1AJxAM8HkKbpne4VbZTxy5FVm3Vx5lWK8KEvbIf4upOiHtKy+N6+XM1WE6iPI0mdzzKH7XH91KpOVdc+X+oi5r1K5/4ypFfmfMmLD53gOZDK9p2OYxzmnmIC8OyCeja+p0VU2tVF/QSYdUNBc6CZoGsudG4ADlJCK2D2KS+odNiWri/oYy9nMn+azH3Mm8BkcTHKHOhB17nIBpFo4gQCeccpVVmeHTj7Vb1vLbLMQ1L2T3PcWmqIvTzriPlpull94rX18C5IyFvG+Z1wQPkOjGxz3WvosBebcdgvUpKK1bPMYyk9IrU2+T+G1Aq6UugmAFTTkkxuAAEjbkmyj32wdUkpLc+3+iRRTYrYtxe9dn9l24riEdLDJPMbMjbpG20nYGjlJsBzrNVVysmoR3s01tka4OUtyKMyix6evlMkxs0E7nEDvIm8Q4zxnh7lp8Ph4Ux6Mfr3mXxGJnfLWX0NfTU0krtCFj5HbdGNpe63MF2lOMVrJ6HGMJTekVqZFbg9VANKenmib86Rjmt7bWXOF1c3pGSfie50WQWsotGIx5aQ5pLXNILXNNi0jYQeArq0mtGc02nqi5M3+U5rojHOR4RCBpHZusewPtx8B6uNZzH4X2MtY8L8v6NHgMV7aGkt68/7JFi3m8/Qy+6VEq41zRMs4HyPO4WuMeWFme8tVdHF7zlU5twx8S4yjfLwLQVGXYQBAQfO1XBlJHCDvp5QSOOOMXP9RYrPK69bXLuXqVmaWdGpR736FSq/M+XXm3ptzw6G+oyGSTqLjbuAWazCXSvf9Gmy+PRoiSdQiaEAQBAEAQEazgY0aSjfoG0s/wADGRtbcb53UL9ZCm4Gj2tq13LaQ8df7Kp6b3sKtyLwnwuthicLxtO6y8W5s12PITot/iV5jLvZUuS37iiwVPtbknu3l7rLGpCAgGeDyFN0zvcKtsp45ciqzbq48yrFeFCXtkP8XUnRD2lZfG9fLmarCdRHkaTO75lD9rj+6lUnKuufL/URc16lc/8AGVIr8z5eOb74tpfRk+8esxj/AORL87DUYH+PEkKiEsovLqmZFiNUyNoa3TY4NGoAuY1xsOclajBScqIt/m0y+Oio3ySOjJB5bX0ZH1iIdRNj3FesWtaJ8jzg3pfHmX2sqao864j5abpZfeK19fAuSMhbxvmSnNV5+fs8vtYoOadR4onZX13gXCs8aErbO9iR/R6Vp1G88g4/ks/v7lc5VVxWPl9ymza3hrXP7FcRRue5rGC7nuDWjjcTYBXDaS1ZTRTk9EX7k9gkVDC2GFovYbpJbfSv4XE+wcCyl98rp9KX/DWUURph0YmxkYHAtcA5rgQ5rhcOB2gg7QuSbT1R1aTWjKLy1whtFWSRM1Ru0ZIhxMdwdRDh1LT4O53VKT37jMY2lVWtLdvGRGIGnr6d97Ne8Qv4i2Te6+YkHqTG1+0pkvH6DBWezui+/Z9S7MW83n6GX3Ss1VxrmjS2cD5HnYLXmPLDzPeWquji95yqM24Y+JcZRvl4FoKkLsIAgKRy/wAaFZWO0DeKAblGRsdY753Wb9QC02Ao9lUtd72max9/tbdm5bDQUlM+aRkUYu+R7WNH7zjYKVOShFye5EOEHOSiu09DUNK2GKOFnixMZG3maAB7FkZzc5OT7TXwioRUV2HevJ6CAIAgCAICoM6mI7rWiEHe00Ybb/kfZzj2aA6locsq6NXS7/8ADPZpb0rej3f6bnM/QjQqag7S5kLTxaI03e8zsUbNrNsYeJJymv8AbKfgWMqcuAgIBng8hTdM73CrbKeOXIqs26uPMqxXhQl7ZD/F1J0Q9pWXxnXy5mqwnUR5Gkzu+ZQ/a4/upVJyrrny/wBRFzXqVz/xlSK/M+Xjm++LaX0ZPvHrMY/+RL87DUYH+PEkKiEspDOH8Z1XPD90xabAfx4+PqzMZh/Il4eiMHJTz6j+0w+8F1xXUz5M54Tr4cy/VlDVnnXEfLTdLL7xWvr4FyRkLeN8yU5qvPz9nl9rFBzTqPFE7K+u8C4VnjQlN50nk4g4H5MMIHNrP4laLLF/4eLM7mj/APfwIpDK5jmvYbOY5r2u22c03B7Qp8kpLRlfGTi00bz8tMT+tv8AVZ/io36HD/L6kr9fiPmH5aYn9bf6rP8AFP0OH+X1H6/EfMavE8TnqniSpkMrw0MDnAAhoJIGoDjK7V1QrWkFojhbdO16zerMeGQtc1w2tc1w5wbr21qtDxGXReqPQuLebz9DL7pWRq41zRr7OB8jzuFrzHlhZnvLVXRxe85VGbcMfEuMo3y8C0FSF2EBCs42VApojSwO/SJmkPLTrgiO08jjwdvFeyy/Ce0l05bl5srcwxfso9CO9+RUS0BnifZqsC3SV1bIN5DdkN/lSkb53UDbndyKqzPEdGPslve/kW+V4fWXtX2bi1FRF4EAQBAEAQBAefcoKndaupkOvTnlI9HSIb3ALW4ePRqiv6RksTLpWyf9ls5s4dHDYjwyPmefXLR3NCoMxlriH/Whf5ctMOvElKgk4ICAZ4PIU3TO9wq2ynjlyKrNurjzKsV4UJe2Q/xdSdEPaVl8b18uZqsJ1EeRpM7vmUP2uP7qVScq658v9RFzXqVz/wAZUivzPl45vvi2l9GT7x6zGP8A5EvzsNRgf48SQqISykM4nxnVc8P3Ua02A/jx8fVmYzD+RLw9EYOSnn1H9ph94LriupnyZzwnXw5l+rKGrPOuI+Wm6WX3itfXwLkjIW8b5kpzVfGB+zy+1ig5p1HiidlfXeBcKzxoSoM68BbXNfwSQRm/KC5p9gWhyuWtOnczPZrHS5P+iJUWhuse7eT3SPdOD4PSGlr4NV1Pnr0X0d5Ar6PTXS3alwfm7w36OT+Y5Z73lf3+Rovd2H7vMfm7w36OT+Y5PeV/f5D3dh+7zH5u8N+jk/mOT3lf3+Q93Yfu8z7+bvDfo5P5jk95X9/kPd2H7vMkOLebz9DL7pUSrjXNEuzgfI87ha4x5YWZ7y1V0cXvOVRm3DHxLjKN8vAtBUhdkPyyy2jow6GnIlqdYNtbIOV3G793t5bDCYGVv7pbI+pX4vHRp/bHbL0KhqJ3yvdJI4ve8lznu1lxPCVoYxUVotxnpScn0pbzPydwWWunbBFqG2SQ62xR8Lj+A4SuWIvjTDpS/wCnXD4eV0+ii9sNoY6aJkELdGONui0cPKTxkm5J4ystZZKyTlLezU11xriox3IyV4PYQBAEAQBAEB5tLr6ztOsrZGMe8vDN44HDaa3AJR1iR6zOPWmIl+dhp8A9cPH87SRKGTAgIFnejJpqd3A2cg85Y63sKtcpf/pJf0VebL/yT/sqpXpQF7ZD/F1J0Q9pWWxnXy5mqwnUR5Gkzu+ZQ/a4/upVKyrrny/1EXNepXP/ABlSK/M+Xjm++LaX0ZPvHrMY/wDkS/Ow1GB/jxJCohLKQzh/GdVzw/dRrTYD+PHx9WZjMP5EvD0Rg5KefUf2mH3guuK6mfJnPCdfDmX6soas8+Y/TGKrqY3CxbPL2FxIPWCD1rW0SUqotdyMliIuNsk+8yclMa8AqmTlum2zmPaNTix223KCAepeMVR7atwPeExHsLOkWVRZxaKaSOJkdSHSvZG0uawAOcQBez9mtU08sthFybWzn9i5hmdUpKKT28vudOdPBzPTNqIxd9KXFwHDC62keohp5rr7ll6hZ0H2+p8zOhzr6S3r0KjWgM8WHknnDbFGyCua9wYA1k7N8dEbA8cNuMdnCqjFZa5Sc6/p9i4wuZKMVC36/ckz84OGAXEznH5rYpAe9oHeoSy7Ed3mic8xw/zeTIhlHnGmmLW0IdTsa4OL32MsljcAjWA3jGu/crDD5ZGO2za/IrsRmcpbK9iJrkdlZFiDNE2jqGC8kXA4fPZxt7x2E1uLwcqHrvj3/cssJjI3rTdLu+xva2LTjkYNr2PaOsEfiosHpJMlSWsWjzo5pBsdRGog7QQthvMe1o9Cwcz3lqro4vecqjNuGPiW+Ub5eBJs5NdLBQl0D3RufKxjnM1O0CHXAPBsGsKFl1cZ3aSWuwm5hZKFOsXptKXWkM0bLAcDnrpdyp23tYvkOpkTeNx/DaVxvvhTHpS/6d8Ph53S6Mf+F2ZOYDDQQiKEXJ1ySu8eV/GeTiHAs1iMRK6fSl/w0uHw8aYdGJtFwO4QBAEAQBAEAQHnKqi3OR7PmPez1SR+C2EH0opmOnHoya7i2s1NXp0Jj4YZntt+66zwe1zuxUOaQ0u171/8NBlk+lTp3MmarSxCA1+P4Sytp5KeTUHgaLhrLHjW1w5j+K7UXOqamjlfUrYODKRxvJ+qonFtRE4NB1StBdE8cYd+BsVpacTXctYvw7TM3YWyl/uXj2FxZD/F1J0Q9pWexvXy5miwnUR5Gkztgmihtr/S49nRSqTlXXPl/qI2a9Suf+Mqbc3cR7Ffaoz/AEWXfm/H/wCbS+jJ949ZnHfyJfnYajA9REkKiEopHOEwnE6qwJ1w8H/ExabANfp4+PqzM49N4iXh6IwslGHw6j1HzmHg/eC6Ypr2M+TOeET9tHmX2sqaohOXuRrqw+E0tvCA0B8Zs0TtGyxOoOGzXqItssrPA41Vfsnu9Ctx2C9r++G/1Kuq8LqISWzQSxkfPY4dhtYq7jdXNaxkmUcqLIvSUWZOTsL/AAyku13nNPwH6Rq8YiS9lLb2P0PeHhL2sdnavUv5zQQQRcHUQdYIWUNWVdlZm8ka502HDTjJJNPez4/Qv4zeTbzq8wuZRa6Nu/v+5SYrLXr0qt3d9iBVFO+J2hKx8bh8mRpY7sKtYyUlrF6lTKEovSS0Ou6+nkzsLwepqjo00L5L/KaLMHO86h1lcrL661+96HavD2WcC1LUyMyIZRET1BEtTY6Oj5OG4sdHjdy//GjxmPd37I7I+pe4PAqn90tsvQmCriwK4y2yCkkkfU0ADjIS6WnJDTpna5hOrXtIPDe22yuMHmEYxULOzt+5T43L5Sk519vYfc1mGzwTVQqIZYrxxgbo0tBs47CdR6kzO2E4R6LT3n3LKp1yl0lobjOfA+SiayJjpHmoisxgL3Hev2AKPlslG7VvTYyRmUXKnRLXaRbJ3NxPKQ+uO4R7dybZ0zhynYzvPIFOxGZwjsr2vv7CBh8rlLbZsXd2lnYbh0NNGIqeMRsbsDeE8ZO0nlKpLLJWS6Unqy7rrjXHoxWiMleD2EAQBAEAQBAEAQFE5b0e44hVNtYOkMg5RIA/V1uI6lqcFPp0Rfh9NhlsbDoXyXj9TbZrsWEFWYXmzKpoYL7BK25Z23cOchR8zp6dXSW9ehIyy7oWdB9vqXAs8aEIAgBCA+NaALAAAbANQTXUH1ALIAgCAWQCyAIAgCAIAgCA4SwteLPa1w4nAOHevqbW4+NJ7zHZhdM03bBCDxiNoPsXt2ze+T+p5VUFuS+hlgW2bORcz2EAQBAEAQBAEAQBAEAQBAEAQBAEBW2dzCj8DWNHBuEpHBtcw+8L8yucqu31vn9ymzWndYuRXDHlpDmkhzSCCNRBGsEK5aTWjKZNp6ou/IvKRtfAC4gVEYDZ2bNfA8DiPcbhZjGYZ0T2bnuNPg8Sr4a9q3khUQlhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB01dVHCwyTPZGxu18hDWjrK9RhKT0itWeZSjFayeiIDlHnKY0Ojw9um7WPCJRZg9Fm13ObcxVrh8rb22vwKrEZolsq2/2T+lcXRscdZLGknjJAVVJaNltHcjtXk+hAEAQBAEAQBAEAQBAYmK4fHVQyU8ouyVpaeNp2hw5QbHqXSqx1zU49hztrVkHCXaUJi+GyUs0kEws+M2vwObwOHIRrWqqtjbBTj2mUuqlVNwkfMKxKallbPTu0Xt62ubwtcOEFLao2x6MtwqtlVLpRLlyVyup69oaCIqgDfwOO3jLD8od44VncVg50PXeu/7mkw2Mheu59xIlDJYQBAEAQBAEAQBAEAQBAEAQBAEAQBAarFso6Okv4ROxrh+rbv5PVbc9q71Ya23hicLcTVVxMg+M5z3m7aGHQH0tRvndTAbDrJ5laU5UltsfgvuVl2a9la8WQXEsTnqnadTK+V3BpnU30W7G9QVnXVCtaQWhVWXTses3qYZXQ5o9G0Xko+jZ7AsfPiZsY7kdy8noIAgCAIAgCAIAgCAIAgI1ltks3EIw5lmVMQO5POoOG3QdycR4D13m4PFuiWj4X+akLGYRXx2cSKXqqaSF7opWlj2Etcx2otK0cZRkulHcZucJQk4yW062OLSHNJBaQQ5psQRsIPAV6aT2M+JtPVE4yfzj1ENmVjfCWDVug3s4HKdj+ux5VWX5ZCe2vY/Is6M0nHZZtXmT/CMqqGrsIZ2h5/VS/ByX4gD43VdVNuEuq4ls7y3qxdVvCzdKMSAgCAIAgCAIAgCAIAgCA4TStYNJ7msaNrnkNA6yvqTexHxtLeaHEMtsOguDUNkd82AGW/WN72lSq8DfP4dOewi2Y6iG+X02kXxLOltFJTcz6g/2N/yU6vKfnl9Pz/CDZmy+CP1InimV9fU3Ek7mNP6uH4JtuLe6yOclT6sFTXuj9dpAtx11m96ctholKIgQBAbPBsAqq06NNEXC9nSO3sTOdx1dQueRcbsRXStZv7nejDWWv8Aai/KdhaxjTta1rTbZcCyyknq2zVpaLQ5r4fQgCAIAgCAIAgCAIAgCAIDQ5U5K0+IN3/wczRaOdou4cjh8pvJ2WUrDYudD2bV3EXE4SF627+8qHH8namhfo1DN4TZkzNcT+Y8B5DrWhoxNdy1i/DtM9fhbKX+5bO81K7kcIDaYdlHW02qCplaBsYTpsHM11wOxcLMNVZxRRIrxV1fDJkio85laywljhlHHYxuPWDbuUOeV1PhbRMhmtq4kmbimzpxnytI9vRyCT2hqjyymXwy8v8ApIjm0fiibGHOXQO8ZtQz0mNPscVyeV3Ldodo5pQ9+qMlucLDDtleOeN/4Bc/d2I7vNHv3jh+/wAmc/y/wv6wf5cn+K+e7sR8vmj77xw/zeTBzgYX9O480Un+K++7sR8vmh7xw/zeTOmTOLho2Pld6Mbh7bL6stv7l9Ty8yoXb5GLLnOoR4sVS7+FjR3uXRZVc97X54Hh5rStyZgVGdRg8lSOdyySBncGldY5S+2XkcZZtH4Y+ZrKrOdWO8lFBGOUOkcOu4Hcu8cqqW9tnCWa2PhSRpazLTEpbh1S9gPBCGxW5i0A96kQwNEfh+u0jzx98vi+hpaioklOlK98jvnSOLz2lSoxjHZFaEWU5SesnqdS+nkIAgAF9Q2nUANpQJakjwfImvqbERbiw/rKj4Psb4x7LKHbj6a+3V/0TacBdZ2aL+yd4Jm5pILOqSap412cNCEH0Bt6yRyKruzOyeyGxeZa0ZbVDbLa/ImUUTWNDGNDGtFmtaA1rRxADYq5tt6ssEklojkvh9CAIAgCAIAgCAIAgCAIAgCAIDhPCyRpZI1r2OFnMeA5rhxEHavsZOL1R8aUloyD47m1glu+iead23c33fCTycLe/mVnRmk47LFr6lZflcJba3p6EDxbJSupbmWBzmD9bD8LHbjJGto5wFa1Yymzc/rsKq3BXV71s/o0ikkUIAgCAIAgCAIAgCAIAgCA76SjlmNoYpJTxRNdIe4LzKcYcT05nuNc58KbJHh+b/EZrF0bYBxzuAPqtue1Q7MxojuevImV5bfLetOZKcMzXwNsaqd8p+ZEBEzmJNye5QbM1m+Bac9pPryqC43r5EuwvAaSl82gjjPz7aUh53m571X24iyzjlqT66K6+BaGxXE7BAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBq8Syeoqm+708TydrwNB/rtse9d68TbXwyZxsw9VnFFEbrc2VG+5hkmhPFcSMHaL96mQzS1cSTIU8rqe5tGkqs1s48jUxP6VrovZpKTHNofFF+v2I0spl8Ml+fU1k+brEm+KyKT0JAPesu8cyofa14HCWWXrdo/Ew35E4mNtK8+i6N3scuix+Hfxepz/QYj5fQ6TkliI/ZJuoXXr9ZR8yPP6K/5WfBkniP1Sf1U/WUfMh+iv+VnYzI3EjspJOstb7SvjxtC+I+rA4h/CZEWQWJu/Zw30pIx/cvDzDDr4vJntZdiH8PmjOhzaYg7xnU7PSe4n+lpXN5pSu/6f/TosqufajZU2at/62raOMRxl3eXD2LhLNl8MfM7xyjvl5G3pM2VE3XJJPLyFwY0+qL964SzS57kkSIZXSt+rN5RZI4dDbQpYiRwygzHtfdRZ4y+e+T9PQkwwlMN0V6m5jjDRZoDQNgaLAdQUdtveSEtNxyXw+hAEAQBAEAQBAEAQBAEAQBAEB//2Q==", alt: "Intel" },
  { src: "https://media.designrush.com/tinymce_images/763815/conversions/shell-logo-content.jpg", alt: ""},
  { src: "data:image/png;base64,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", alt:"Antigravity"},
];

const problemPoints = [
  { icon: Clock, text: "Manual debugging wastes time" },
  { icon: Code, text: "High developer dependency" },
  { icon: Search, text: "Complex error tracing" },
  { icon: Zap, text: "Delayed product releases" },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problemPoints.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoScroll]);

  const handlePrev = () => {
    setAutoScroll(false);
    setActiveIndex((prev) => (prev - 1 + problemPoints.length) % problemPoints.length);
  };

  const handleNext = () => {
    setAutoScroll(false);
    setActiveIndex((prev) => (prev + 1) % problemPoints.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (activeIndex + i + problemPoints.length) % problemPoints.length;
      cards.push({ idx, position: i });
    }
    return cards;
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              AI-Powered Error Resolution
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            AI That Understands
            <br />
            <span className="inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="group relative cursor-pointer inline-flex items-center justify-center align-middle" aria-label="Errors">
                <span className="text-red-400 font-mono text-3xl md:text-5xl border-2 border-red-500/30 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 ease-out group-hover:w-[180px] group-hover:bg-red-950/30 group-hover:border-red-500">
                  <span className="group-hover:hidden animate-pulse">!</span>
                  <span className="hidden group-hover:inline-block text-2xl md:text-3xl font-bold tracking-wider text-red-100 animate-fade-in">ERRORS</span>
                </span>
              </span>
              <span className="text-gradient glow-text">Like Humans</span>
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            RANDER<span className="text-red-500">.AI</span> is an intelligent LLM-powered platform that automatically
            detects, analyzes, and fixes bugs & errors in applications and products.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div
            className="glass-card p-6 sm:p-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-lg sm:text-xl italic text-foreground/90 font-display">
              "Every error is an opportunity to build something better."
            </p>
            <p className="text-sm text-muted-foreground mt-3">— RANDER<span className="text-red-500">.AI</span> Philosophy</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="py-6 border-y border-border/40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by innovative teams worldwide</p>
          <LogoCloud logos={logos} />
        </div>
      </section>

      {/* Glow Divider with Animated Box */}
      <div className="w-full flex justify-center my-16">
        <div className="relative w-3/4 h-8 flex items-center">
          {/* Glow background */}
          <div className="absolute inset-y-1/2 left-0 right-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-primary blur-md opacity-70 animate-pulse" style={{ height: '50%' }} />
          {/* Main divider line */}
          <div className="relative z-10 w-full h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-primary" />
          {/* Animated box model */}
          <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2 animate-divider-box-move">
            <div className="w-8 h-8 bg-white/90 border-2 border-primary rounded-xl shadow-lg flex items-center justify-center">
              <span className="block w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Bugs <span className="text-primary">Slow Growth</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Understanding the challenges that slow down development teams worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 hidden lg:grid">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="font-semibold text-foreground">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Swipeable Carousel - Mobile/Tablet view */}
          <div className="lg:hidden mb-16 relative">
            {/* Vertical Carousel Container */}
            <div className="relative h-auto overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-6">
                {getVisibleCards().map(({ idx, position }) => {
                  const point = problemPoints[idx];
                  const opacity = position === 0 ? 1 : 0.3;
                  const scale = position === 0 ? 1 : 0.85;
                  const translateY = position * 80;

                  return (
                    <div
                      key={idx}
                      className="w-80 h-60 glass-card p-6 transition-all duration-500 ease-out flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/30 relative"
                      style={{
                        transform: `translateY(${translateY}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: position === 0 ? 10 : 0,
                      }}
                    >

                      <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors relative z-10">
                        <point.icon className="w-8 h-8 text-destructive" />
                      </div>
                      <p className="font-semibold text-foreground text-lg relative z-10">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {problemPoints.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoScroll(false);
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/40 hover:bg-primary/60"
                    }`}
                  aria-label={`Go to card ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent group-hover:from-primary/10 transition-colors duration-300" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  The RANDER<span className="text-red-500">.AI</span> Solution
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our AI scans, understands, and resolves issues automatically
                  with minimal human intervention. Focus on building, not debugging.
                </p>
              </div>
              <div className="md:ml-auto flex-shrink-0">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Fix Bugs <span className="text-gradient">Intelligently</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the future of software maintenance. Let AI handle the complexity.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
