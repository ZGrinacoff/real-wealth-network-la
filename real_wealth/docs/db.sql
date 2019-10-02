PGDMP     7    9                w           realwealthdata    11.4    11.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    24914    realwealthdata    DATABASE     �   CREATE DATABASE realwealthdata WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE realwealthdata;
             postgres    false            �            1259    24921 
   employment    TABLE     *  CREATE TABLE public.employment (
    years integer,
    periods character varying(3),
    area character varying(25),
    adjusted character varying(3),
    preliminary character varying(15),
    laborforce integer,
    employment integer,
    unemployment integer,
    unemploymentrate numeric
);
    DROP TABLE public.employment;
       public         postgres    false            �            1259    24945    home_rentalprice    TABLE       CREATE TABLE public.home_rentalprice (
    dates character varying(7),
    regionla character varying(25),
    medianhomepricela integer,
    medianrentalpricela integer,
    regionus character varying(20),
    medianhomeprice integer,
    medianrentalprice integer
);
 $   DROP TABLE public.home_rentalprice;
       public         postgres    false            �            1259    24942    medianincome    TABLE     t   CREATE TABLE public.medianincome (
    years integer,
    region character varying(20),
    medianincome integer
);
     DROP TABLE public.medianincome;
       public         postgres    false            �            1259    24948    monthlylistings    TABLE     �   CREATE TABLE public.monthlylistings (
    sizerank integer,
    regionid integer,
    regionname character varying(20),
    regiontype character varying(10),
    statename character varying(2),
    dates character varying(7),
    totallistings integer
);
 #   DROP TABLE public.monthlylistings;
       public         postgres    false            �            1259    24951 
   population    TABLE     {   CREATE TABLE public.population (
    years integer,
    population integer,
    growth integer,
    growth_rate numeric
);
    DROP TABLE public.population;
       public         postgres    false                      0    24921 
   employment 
   TABLE DATA               �   COPY public.employment (years, periods, area, adjusted, preliminary, laborforce, employment, unemployment, unemploymentrate) FROM stdin;
    public       postgres    false    196   �                 0    24945    home_rentalprice 
   TABLE DATA               �   COPY public.home_rentalprice (dates, regionla, medianhomepricela, medianrentalpricela, regionus, medianhomeprice, medianrentalprice) FROM stdin;
    public       postgres    false    198   s"                 0    24942    medianincome 
   TABLE DATA               C   COPY public.medianincome (years, region, medianincome) FROM stdin;
    public       postgres    false    197   ^.       	          0    24948    monthlylistings 
   TABLE DATA               v   COPY public.monthlylistings (sizerank, regionid, regionname, regiontype, statename, dates, totallistings) FROM stdin;
    public       postgres    false    199   m/       
          0    24951 
   population 
   TABLE DATA               L   COPY public.population (years, population, growth, growth_rate) FROM stdin;
    public       postgres    false    200   �1             x��\ɮeG\��
�U�CK�1Il�0���l$��<Y���)��ʋ]'+#��*i}����}���~��w����~�����|�~������?>���}x2[��ݷį����_�Or����(���.�@@����A�����Zt�'�7�Pd�?�v~�������B�e�J��Ł��9�6�Z��"������r���0�FX�.������5�]^�.���I�]�'
����E����
���ׁ"�_���e��e���;ʺ�.�w\((C�Q��.��-أў(���g
Eg�����D���sL<(��������
^Q!Y �-;{����E��E�姟�ȡ�]kY@y�e�<j`����I<7ށA���q`4x�
ɢ&�RAܞ�B��-�@�>�g2�z��P,j���b6���dQ�+=78v��Q8��.�q3|�=��eQ����O�E���1J�(,���!���h��8i�1+�AaY��*�Z�#C�EAi"�	\�
ˣ>�����yޑ�#"A�]f��b@ay$`�D5%cb-z���H/�l�/��7
ˣr�93��PXW
ţf#�n.U��'
ɣ�%P�u#9�B!y�|$q�6إ�'
ɣ�)��Q�4���Q�Ɩ�R|a-($��X�/��3���<B�:$���&�4�Zz��-��z�PX5dƁBL�z�(PX�j	߳���<v�xdQ2��N���3���Q�-��W���7���Q�����_Q*��G�lO�ZF�v�Zʺ��n �hKj�c]�G���=�e�(�r<
��-��ڈu(�b�Q$�ޓG��r���Q|Q�E5�{eY�/|��<���ŭg�B��EF���X���BMB,�F#y(`�;�\8��g-�V��������]��K�(3�ð�H=(�6�J_��Weu�Hم�GUFq��́ҁ�棆|	%[�5��l6j1�g��=u���l�6bwO4]�3�ϱ٨MD]���,b&|Ni��(Z����6ZiY�E�%\�`X!����6�7�H�6���v����g5��T*t�pz+�D�p���V�/o����	)ր� ���Q:!-lv��P֜�W鄴PF�2Q��@����i_���MH#2A @)a�jV����/�Ch"u�"�DzMg���Dj�����=K�*2ղduϮ+`0,�Z�O����F�j8"����tn6���I*5�KtL�d��/�I�!��lc]�{#6�v�T*�Օ$p�'5pIh.�(3��5��
x�5,�d2t&��A��װlR�I2<v�>� ��ɐ��"�"�_�/�N3������ʹ]�(��A%�0ZF��Q���RՂ�	c�0,�j^���Ȩ'`T�%^�IێvlS�a%
/�e_�p��̄m��!9�\ձy��95g�8��e@�MLs
S4���쳚�Sy$p�dj�5+�n�����j���!,�d�XNEU�y2� �iϝj,��N��������`�,��'�@��o|��do�l�a9�Ѭ(F+��˩��(m٭��~�S����2�1��mXNaz�Ij��7ϩ�I/�ü��a9�R��߈�7:O�0׎�y�a9��D?�f��6�=��n�UӒ���{�P�=��*{����UQ4�8>`akg0u�뮵{�p�f&�|�*g����z�l����wU���+k⣼#��Z�<0d�W�:Ǘ�;�^�!9u�k���r�Cz���Z���x�~��7�Q�G�$&r���dTd�Uy!��-v�̀!��Tp��<`X�CX!�k׀�:��
�Qc�r��`p�X�Cl���)y��`��X�C��ܦ��Q҂����`@8���Vs�3"o���"S��C�v�+|f/��r��Qqb������߹%3u�3�k��!�/
�V%1�X�C��شG��ش��f&�*� `P���>�e�+2ʀ��#L{+{�ο��-���+|��u���ǘ����,���P2�
ɢ�C�pK�2�B�hy�!n6/)S��,Z~b�Cʑ��š5�9.!Ga��~"��8
G1�C�Ɗ.A��W�?��+z�!�ԑ/fX`"+z8R�@�Q�L� $�=J�
�,h�p��X�C$Ŋ�#�C���eE���D�}ƈ,�Ў��(�-%�@a��(�g�7�Au���\U=b+yt�>!�ж�Q8��!���nO�Esﷵ�Xw�d%����O��x��,jXy�$���e�@�p�F4�e�`k݄�x���<�{�J����Cs`K.*����EsԠtO��GT`Q�T��f�l��h�Ü����x�-�r,���c.)i��4Z��|aEL��h�ìc^7��D�($��n�.�L���D!Y4Kd�ћa�vPX5�*R�/�˲�u�V�Z�-�j��a�`�i�����т��u6���B��Bayd �d�(����� 20��)&g��p<�Z�f�H�/�G���:CI��h�G���,w<RP��B��g�_$?�PX9�ߑй���se%�B(�
�8�K�(P�E#]_����<���2�l|Qr��<L��Z��n�Qv�w��e���<�%��
���-��<���zVw*�1��a)P�sY����,B�XE3i���,:j� )f��B�&�#�ko�i��e�BR�;ǳu��BaYc
��B��-�!�l�Z�@e��.��]VAT����j��y�5��[{��5fk�#���}�u��X@�@R�?QXA"q}����Z�\Q���W\{�йH�>��s�@!sQi�!*�T��͢]ʮL��Ǐ���9L[�����wv�e�^�ud^(,�L�UG�O�G�b�0��:�Ph��tiv.��s5����-�]����ҥ�S��`�!�DaY������c�]���Y��HH�i�H˶$��^������hm�D8���F��d���eQMQ#�e�3���
�"L��C�?� �`9�|\*��֣*�U��[U�Y�4?�m�z��U�+��њ�Qu�.\��P�zzZ�0���,����ZH��hb��M_($��|C��Y�?�Z5Z�0fyK��w��i9Øu,-�����(���X.2-࢕]8\>�"7����wi-�X���+E��2�]��q�b�1���&�9���?�(,�z���eCD�O}oZ����Z
��R�o($��5��OrqN�3($�\QsD����Y�`�r��"=�q��"n���;r��ZQx�~��r\ ����h(���P��F��?�+�Br�q� (��"�+�Ba9T
�hds�
ˡ�$�uy�7�C�q�{�����P�i訋��a]Z�`�n�.����M��,2�����Ы�k��,��*7���N�N�G��Z ���Day$8��"Qߝ��K�HQ�KuP/>P8��R��V_4�.$��$G�wPH�c^"^kok!y�vq�KpA�B��붌�.겮?�K�ȫ���%���u�v!���n�^==�H�B�H�c51ɭz��<҅�Z��w\�R��<Һ��VC�Z�d嬅��ͬ�ug��e[�EV
�잯}�3/)�EVb�^����
�"��:����s�z�p��:�7��>�L��
/�2��������zẑ�(3Ӑ,�'
�"���^����]���0g�l6ţ,��ɁB�Hp����Qʨ�E� ��CP��@�²J�@I�S
���dQ�&'b�2�*.Y-��_�>�%�\���a9(�Tj�&N���B�L�4��Y7'J]�@!y��S�z\@����4�_�O���\����D!y�u���������䑖�A���Mx�_���t�>vٷui���]ˁ����.�`(�����($�3��`����B�(�~0@q?/�G�F< ��.�#���렍� Z+!Y$�=FYŨ�E�G�D�Xq��/D������P($����BA��ƺ"�_<�(�t��Uԥ�u��k�9��S'����k�y ��@�?�њծ�|��$�p�hϐ�s����|A𪁮z�	!��/�F��ꅎVv �  9[D�(�ԻP��I������M�k�/;W�;Ph!��JF�����4��N7N�����|AV&�.94QtmE#Z�p�$#hD*����$)���
�7���-��6G�o�pC�ؐ0l]w2I]��45_l��p�]I]v)/��&�ea����]�U��xM�S��<��6<� Ð���K#u���Da�*x��hq��x��)i㥑�M��.tJ�e�xJ�s�蔄���é}��28"i��Ua�ú�8�O%d��PHYb5�,�󎼴��p�
�H������l�Wa*;β-9fp�2Z�ڀ�!�"�V�j]�����V1�V\����z�&a�Aj��R]�Z��I��a������	Î�Z�� �s�a�YCG:�0�a���5-e��������/�B�	H��y^үDa��8�7~��BK�@a�4���4]O�T�E�g#�b�Muمe�y��^���r����p/�BIϑ-f����/���	-f���9�De�!-g�z�����*5U�4�$�׬�jq�vV;M��G���(�#-gp��@J&>��!Q؃X�{��p_��GHQt��
R��z�����
�Nƃ�=B�,5����l�Z�K!�:��#��p�Zˣi�����5Ų.�#D��U#(B���3�g�Xj�̯��B��c�:�Q����/�_0�g�X�Rϓ��h�����O�>���e�         �  x��[��%��w��~���()4�Ng���0`�����k��GUn��Z"�E�յ��Ҿ����~���~����~�ӯ����_��Yʗ_���o�����?~�돿���ۗZ^��_��<�f���f� �F�=�'�^\1�f���;�yϵ�Np�s��>���B�{;�"L�{;�=�����ef0�v%{֒�Dە�S5���+	�&����X6Ѷk���D�B�A	̴�d�=��i��/�l0�m#"�w�Tۓ�,��G!�1$�������=�X{>���=�X{����|y���﹦�f2m�y��������ٳ�,��18��h{,�l��
�䔬��ۋi{�dP�g0���4TSZL۳�=�4�����=�Ǟ��_����2��\D�)�,��EJ��b2k��Wam/%֞��D۫�S�u
%0V��D$kd0V���r���&Lۻ���r0��r����ږ�X$r��ږ�qH�>��-��r��d0Զ��$�� Cm��7��ږ�8{J|j{���-�k[*3���
�V<_�
R{�X�J��U�3�L�`�eÙD�f0ֶ��N�c�X�J�UZ���V!�*����J��`�m5�Ǘ�����*3���[!`ͮ"�n���]E��H��-��h�� ��&L۝��J�/wr�i�ga��䚠�� cm�E`�m#'�Ι�X�6�HV�`��A�V���f�v+�ecmO�3h5/�h{�����Y����fym/�=[{�S�����ը�#V���������P�Z�<[:%�h[k#"5�����/��N��U�u�͇���U����`�mՁ���Y�D��^v������#�������5k[�c���vUc�$�u���<IK���ۘ��=����6��ǲ��[%�KK~nD�MH�5}|j�)�Y�$�h{����am��v��Y$Xۭ�R�R�و��)N��d?cm7[��C�y�m���Ӊщ��C��Fk�ݦp���Ƚj��ݙ���g՘�/Cm�$���hCm�J���t�v��6��l��.��3{^6�vW�9�va���z#��9�°�wz&{^�4dD۽��b�����F��KjCm�r�y���Kv���w�*�P�}����0�� �ekcm��y�Ǘ����$6��Cx$0�� ��Z��D�6��W�3Ѷ�z{���Kv6rZ�ds��F�+�:�\�w|JJIe�K�~o����J>&���n�9.�~cm7rܬ%��Ͳ皏=cm+��dm�e�mW25Z��
��[���撽(���=�\�-�����`V�p�'�K�A�y��K66~����vo�˽f0��I�S{���N\����3�����f�{&���[�=�q�+d�?�&�v%c���{fs�VI{4�`��B��#�_�\rߌ��G},�I�\u^Pj�>�"�mK�bsI���j�2�I&I�r�K^����I�=��U�O2IYa)$�\R���M�|���.v�+�����3[�L�L�X{_D+�K��ǫ� mq��Ĩl.��Ԟ���V6�T6��� cm/RXy,�h{�/�����I��W^6�v#m��ƴ}�Y갳���bu+0H7�2ګ?u6���O�ґԮ�u�n�x㪀��y�"��ֺ��6�i��nz�Ӄ �}��Vp���-���: ��I��`ݛ�*n#o� �ڷ0��[�& ɍX��J�5$?��n�.A�c�oA��A��0"�[#Rn+K��1��JVЮ8�6�W�����F�'��ǋ��3�W'�G0�B�  +�R�V��v]ݫ�
=ܨ��@�-�X�WQ�Wp(�X�X�#��ݨ%H,��=H,DN��Tb$�^�g0_A���c��W`gN�9���� )O6�1J�R0���N�\uɝP��sVgYy:�9��|p�L-�3�����l�.�&A@�E���L���<�Ր�:��IHl&�j�:�<���^�wY�Z���q,��W@��	���E0��N{U���,�܈3�H���a�#��A��m�ge9Og���e�c�MpĂ77��D6/m���-����XA@V0���`H໮g�דƓ���F�X�a@u��6��Я�l��#�؃��tf�:+I��Q�:A?�������}��E��n/�X�ֶ�a����u��X�+��*�����*T�aD6Wu!�Y+{���l�	�H(�*=��U������!��'ӛ �`X:~2�H�XW�?v�8�[�M`A�ca^yg���{A��X�6�>~�-\S������9����q�$^�� ǂ��ڧ�i��Ek�EP�XX���~mc�ǽk�
��7,7Ax���Kq7�s��
�Uo���x��^�����y�L�
&:��!�y�$��T�;�:�i�{�j��U��uɇ�`�_�� cW�GB�-��g��,�:�~2m��c��`cΧ�'U?���_R������E�mD2Ϻ�����s*�:X��L�z8��C>g��$���Qd����
؛R?��BH����<ܸԍ8/!��m�K?���Z�ك ���m�C�܈^h��9�Ky�6�^�z�Gg�vE��y�9%� ����l��9�DFr7ҙ�O���s4���x� ���O�v-��x��K�M@�-��>�!f�R�v���6?�Q���� �Dba^W�]�=b$�t���%��iX`%ΫS"�|��'�m:�]�N7�g!������#�
,��Q/��w6A�?N޷��G�T��J�X0���=lP�6]��+�q�8���0�x�`i�Փx�X�2�ǭM����|=`,X	 oƽ	`,�����#�X�F<:��o�6��D�^⌣��ES,�ٰ�B���F?��߿�|��/��nO��rd��]Q�3���؜��@�F�8�֘���-p,���Mpz�&�m�cA��GӅd�p,~�*�ޓL676��Y�~����~��?(M��         �   x�m��n�0�g�a
���3�5�AZ0l N��}+��xG~�D����K<JQ�yy|o��1.Dw��y��/��s{�����YKM+/���I�{�I��r�IŠZ^9=^��N�
��8A�|R��^�)k}��M�P-�AGO�'˥&�Ww�jyr9z�|��/f�gQ������+�����3�{�3x��Gd�:��,�v��T	���0����޻�F�ّ:ԙ��^�x)5��?(�����ɟF�<~}���
��(      	     x���=r$1��S�v	?
]N��N9q��{�E��Q'�
	>�.�Aׯϯ�����������������y�x�<�OS�F��S�����ܘ��1�hC�-j��2�͎���BE�<FC�R�$����D�8U�G#��5�Ipgq�E�p��PȮ9����b�����mŰ�1��H�dYG�l�j�bX��+ao�*�bj���8��"�o����i��*��Ŭ�(�_Ʉ�V��!щ�\�㞨���~��+�I��j��(h�9�%Z\9�]+��ΕW�����spM��VsН�zXq�����	w�W$�_Yq%�P$Wi%p���*'g'Fq��hŕ�����8�~�R�~��*��������p^��7�뛫����~�^��ـ���+˛4��1��\��Oŕ,��#���]�K����O�8\Y+F�>��p��:��p��(�!�{o��O��=ͤ��9��pq�v��Q�{�R��go��a}�A�i_�=8����.��v����N���u������!�~��n�C�'�      
   <  x�-��q�0C�t/���T���PٛGO�@�Q(2��n��P�u:aϗ���2C�<�Ȯ,�p�Sv.�Y�b#�|U���3�"y��5��|�KJ_p#���jkɰ�^�$f�4�c�M1��9��r-&��*]6�d���a"h9�X������M����D)�t��Lc�Q�,!��5lҫ���L.Iqn+�ל�htL�ڶH}=ge�ٜ/��F�d	�N����gח��Vgg�fn��d��Ȱh{ᇊak�#���qM�(H��tч��U
��bzos|�m��
���<���m�     