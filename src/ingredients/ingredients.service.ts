import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async createInitialIngredients() {
    const newIngredients: string[] = [
      'Abacate',
      'Abacaxi',
      'Abóbora',
      'Açafrão',
      'Acelga',
      'Açúcar',
      'Agrião',
      'Alcachofra',
      'Alcaparra',
      'Alface',
      'Alho',
      'Alho-poró',
      'Almeirão',
      'Amêndoa',
      'Amendoim',
      'Amora',
      'Anchova',
      'Angu',
      'Aveia',
      'Avelã',
      'Azeite',
      'Azeitona',
      'Uva',
      'Uva-passa',
      'Vagem',
      'Valeriana',
      'Vatapá',
      'Vinho',
      'Wasabi',
      'Whisky',
      'Xarope de bordo',
      'Xerém',
      'Xilitol',
      'Zimbro',
      'Zimbro em bagas',
      'Zimbro moído',
      'Zimbro fresco',
      'Zimbro seco',
      'Zabaione',
      'Zaatar',
      'Zest de limão',
      'Zest de laranja',
      'Zafrão',
      'Batata',
      'Banana',
      'Beterraba',
      'Broto de feijão',
      'Caju',
      'Cebola',
      'Cogumelo',
      'Couve',
      'Feijão',
      'Gengibre',
      'Lentilha',
      'Manga',
      'Pepino',
      'Pimentão',
      'Salmão',
      'Semente de girassol',
      'Tofu',
      'Tâmara',
      'Trigo',
      'Alfafa',
      'Amarula',
      'Aneto',
      'Araruta',
      'Arracacha',
      'Beldroega',
      'Caqui',
      'Chicória',
      'Damasco',
      'Endívia',
      'Figo',
      'Goiaba',
      'Hortelã',
      'Jicama',
      'Kiwis',
      'Lichia',
      'Manjericão',
      'Nabo',
      'Papaya',
      'Quiuí',
      'Rúcula',
      'Salsaparrilha',
      'Tapioca',
      'Umeboshi',
      'Amaranto',
      'Agar-agar',
      'Baru',
      'Chuchu',
      'Dill',
      'Endro',
      'Fubá',
      'Gergelim',
      'Hibisco',
      'Inhame',
      'Jabuticaba',
      'Lavanda',
      'Mandioquinha',
      'Nirá',
      'Ora-pro-nóbis',
      'Pupunha',
      'Quinoa',
      'Rabanete',
      'Sálvia',
      'Alecrim',
      'Alho',
      'Almôndega',
      'Avestruz',
      'Bacon',
      'Berinjela',
      'Canela',
      'Carne bovina',
      'Carne de cordeiro',
      'Carne de pato',
      'Carne de porco',
      'Carne moída',
      'Carne suína',
      'Cebolinha',
      'Coelho',
      'Coentro',
      'Costela',
      'Curry',
      'Empanado de frango',
      'Ervilha',
      'Filé mignon',
      'Frango',
      'Galinha',
      'Gergelim',
      'Grão de bico',
      'Louro',
      'Macarrão',
      'Maminha',
      'Manjericão',
      'Maracujá',
      'Molho barbecue',
      'Mostarda',
      'Nuggets',
      'Orégano',
      'Ovo de pata',
      'Ovo de codorna',
      'Ovo de galinha',
      'Páprica',
      'Picanha',
      'Pimenta',
      'Pimentão',
      'Presunto',
      'Queijo',
      'Rúcula',
      'Salsicha',
      'Salsa',
      'Salvia',
      'Shiitake',
      'Tofu',
      'Tomilho',
      'Truta',
      'Vitela',
      'Abobrinha',
      'Alcatra',
      'Alho-poró',
      'Amêijoa',
      'Atum',
      'Badejo',
      'Baunilha',
      'Bife de chorizo',
      'Bisteca suína',
      'Caldo de galinha',
      'Carne de búfalo',
      'Carne de jacaré',
      'Carne seca',
      'Chouriço',
      'Codorna',
      'Cordeiro',
      'Costeleta de cordeiro',
      'Coxa de peru',
      'Coxa de frango',
      'Cravo-da-índia',
      'Curry em pó',
      'Endro',
      'Escargot',
      'Faisão',
      'Farinha de rosca',
      'Foie gras',
      'Funcho',
      'Gema de ovo',
      'Gorgonzola',
      'Haddock',
      'Iscas de fígado',
      'Ketchup',
      'Lagosta',
      'Laranja',
      'Lombo de porco',
      'Manjerona',
      'Mariscos',
      'Mexilhão',
      'Mignon suíno',
      'Mirtilo',
      'Molho de soja',
      'Músculo bovino',
      'Ostra',
      'Ovo de avestruz',
      'Páprica defumada',
      'Pargo',
      'Pássaro',
      'Pato',
      'Peito de frango',
      'Percebes',
      'Perna de cordeiro',
      'Porco',
      'Pudim de carne',
      'Rabanada',
      'Rim de porco',
      'Rins de vitela',
      'Sal do Himalaia',
      'Salsão',
      'Salsicha alemã',
      'Salmão defumado',
      'Sêmola de trigo',
      'Siri',
      'Tainha',
      'Tangerina',
      'Toucinho',
      'Truta salmonada',
      'Tutano',
      'Vitelo',
      'Xerém de castanha',
    ];

    for (const ingredientItem of newIngredients) {
      const hasIngredient = await this.ingredientRepository.findOne({
        where: { name: ingredientItem },
      });

      if (!hasIngredient) {
        this.create({ name: ingredientItem });
      }
    }
  }

  async createMany(
    createIngredientsDto: CreateIngredientDto[],
  ): Promise<number[]> {
    const newIngredients: Ingredient[] = createIngredientsDto.map(
      (ingredientDto) => {
        const ingredient = new Ingredient();
        ingredient.name = ingredientDto.name;
        ingredient.quantity = ingredientDto.quantity;

        return ingredient;
      },
    );

    const ingredientsRaw = (
      await this.ingredientRepository
        .createQueryBuilder()
        .insert()
        .into('ingredient')
        .values(newIngredients)
        .execute()
    ).raw;

    const ingredientsId: number[] = ingredientsRaw.map((rawItem) => {
      return rawItem.id;
    });

    return ingredientsId;
  }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const ingredient: Ingredient = new Ingredient();

    ingredient.name = createIngredientDto.name;
    ingredient.quantity = createIngredientDto.quantity;

    return await this.ingredientRepository.save(ingredient);
  }

  async findAll(): Promise<Ingredient[]> {
    const ingredients = this.ingredientRepository.find({
      take: 12,
    });

    return ingredients;
  }

  async findByName(name: string): Promise<Ingredient> {
    const ingredient = this.ingredientRepository.findOneBy({
      name: name,
    });

    return ingredient;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ingredient`;
  // }

  // update(id: number, updateIngredientDto: UpdateIngredientDto) {
  //   return `This action updates a #${id} ingredient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ingredient`;
  // }
}
